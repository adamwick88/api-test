const express = require('express');
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
const dragonball={
    'goku':{
        'name':'Goku',
        'powerLevel': '9000',
        'outfitColor':'Orange',
        'mainCharacter':true
    },
    'vegeta':{
        'name':'Vegeta',
        'powerLevel': '9000',
        'outfitColor':'Blue',
        'mainCharacter':false
    },
    'bulma':{
        'name':'Bulma',
        'powerLevel': '10',
        'outfitColor':'Blue',
        'mainCharacter':false
    },
    'unknown':{
        'name':'unknown',
        'powerLevel': 'unknown',
        'outfitColor':'unknown',
        'mainCharacter':'unknown'
}
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const dragonballName=request.params.name.toLowerCase()
    if(dragonball[dragonballName]){
        response.json(dragonball[dragonballName])
    }else{
        response.json(dragonball['unknown'])
    }
    response.json(dragonball)
})
app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT} `)
})

