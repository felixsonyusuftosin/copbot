import express from "express"

const router = express.Router()

// define routes
router.get("/", (req, res) => {
  return res.json('Welcome to the copbot')
})

export default router
