const houses = require('./db.json')
let id = 4
module.exports = {
    getHouses: (req, res)=>{
        res.status(200).send(houses)
    },

    createHouse: (req, res)=>{
        const{address, price, imageURL} = req.body
        const newHouse = {
            id,
            address,
            price: parseInt(price),
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
    },

    updateHouse: (req,res)=>{
        const {type} = req.body;
        const {id} = req.params;
        const index = houses.findIndex((h)=> h.id === +id)
            if(type === 'plus'){
                houses[index].price += 10000;
            return res.status(200).send(houses)
            }else if(type === 'minus'){
                houses[index].price -= 10000;
            return res.status(200).send(houses)
        }
    },
    
    deleteHouse: (req,res)=>{
        const {id} = req.params
        let itemToDelete = houses.findIndex((h)=>h.id === +id)
            houses.splice(itemToDelete,1)
            res.status(200).send(houses)
    }

}