const WebSocket = require("ws")
let wsConnections = new Map() // userId -> WebSocket connection

const setupWebSocket = (wss) => {
  wss.on("connection", (ws, req) => {
    console.log("New WebSocket connection", req.url)
    // Handle incoming messages
    ws.roomId = req.url
    ws.on("message", (message) => {
      try {
        const data = JSON.parse(message)

        if (data.type === "join") {
          wsConnections.set(data.userId, ws)
          console.log(`Registered WebSocket for user ${data.userId}`)
        }
      } catch (error) {
        console.error("WebSocket message error:", error)
      }
    })

    ws.on("close", () => {
      // Remove connection when closed
      for (const [userId, conn] of wsConnections.entries()) {
        if (conn === wss) {
          wsConnections.delete(userId)
          break
        }
      }
    })
  })
}

const broadcastLeaderboard = (data) => {
  const message = JSON.stringify({
    type: "LEADERBOARD_UPDATE",
    payload: data,
  })

  wsConnections.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(message)
    }
  })
}

exports.setupWebSocket = setupWebSocket
exports.broadcastLeaderboard = broadcastLeaderboard
