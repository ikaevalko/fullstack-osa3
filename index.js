const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(express.static('build'))

let numbers = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/info', (request, response) => {
  response.send(`
    Phonebook has info for ${numbers.length} people
    <br><br>
    ${Date(Date.now())}
  `)
})

app.get('/api/persons', (request, response) => {
  response.json(numbers)
})

app.get('/api/persons/:id', (request, response) => {
  const person = numbers.find(number => number.id === Number(request.params.id))

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  numbers = numbers.filter(n => n.id !== Number(request.params.id))

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing'
    })
  }

  if (numbers.find(n => n.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  numbers = numbers.concat(person)

  response.json(person)
})

const generateId = () => {
  const maxId = numbers.length > 0
    ? Math.max(...numbers.map(n => n.id))
    : 0
  return maxId + 1
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})