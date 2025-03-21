function visualizeStoryGraph(storyGraph, containerId) {
    const container = document.getElementById(containerId);
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = container.clientWidth;
    canvas.height = 600;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    // Create node positions
    const nodes = {};
    const levels = {}; // Organize nodes by level from intro
    
    // Calculate node levels with breadth-first traversal
    function calculateLevels() {
        levels[0] = ["intro"];
        let currentLevel = 0;
        const processed = new Set(["intro"]);
        
        while (levels[currentLevel] && levels[currentLevel].length > 0) {
            levels[currentLevel + 1] = [];
            
            for (const nodeId of levels[currentLevel]) {
                const node = storyGraph[nodeId];
                if (node.choices) {
                    for (const choice of node.choices) {
                        if (!processed.has(choice.nextNode)) {
                            levels[currentLevel + 1].push(choice.nextNode);
                            processed.add(choice.nextNode);
                        }
                    }
                }
            }
            
            currentLevel++;
        }
    }
    
    // Position nodes in a hierarchical layout
    function positionNodes() {
        calculateLevels();
        
        Object.keys(levels).forEach(level => {
            const nodesInLevel = levels[level];
            const levelY = level * 100 + 50;
            
            nodesInLevel.forEach((nodeId, index) => {
                const totalWidth = canvas.width - 100;
                const slotWidth = totalWidth / nodesInLevel.length;
                const x = 50 + index * slotWidth + slotWidth / 2;
                
                nodes[nodeId] = { x, y: levelY, id: nodeId };
            });
        });
    }
    
    // Draw the graph
    function drawGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw edges first
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        
        Object.keys(storyGraph).forEach(nodeId => {
            const node = storyGraph[nodeId];
            const startNode = nodes[nodeId];
            
            if (node.choices) {
                node.choices.forEach(choice => {
                    const endNode = nodes[choice.nextNode];
                    if (startNode && endNode) {
                        ctx.beginPath();
                        ctx.moveTo(startNode.x, startNode.y);
                        ctx.lineTo(endNode.x, endNode.y);
                        ctx.stroke();
                    }
                });
            }
        });
        
        // Draw nodes
        Object.values(nodes).forEach(node => {
            // Determine node color
            let color = '#4285F4';
            if (node.id === 'intro') color = '#0F9D58';
            if (storyGraph[node.id].ending) color = '#DB4437';
            
            // Draw node circle
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw node label
            ctx.fillStyle = '#FFF';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(node.id, node.x, node.y + 25);
        });
    }
    
    // Initialize
    positionNodes();
    drawGraph();
    
    // Add interactive events
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if a node was clicked
        for (const node of Object.values(nodes)) {
            const distance = Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2);
            if (distance <= 10) {
                // Show node details
                alert(`Node: ${node.id}\n${JSON.stringify(storyGraph[node.id], null, 2)}`);
                break;
            }
        }
    });
}

export { visualizeStoryGraph };