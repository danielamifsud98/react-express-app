import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { updateSlotResult } from '../store/actions'

// SET IMAGES 
const lemon = require('../assets/lemon.png');
const banana = require('../assets/banana.png');
const cherry = require('../assets/cherry.png');
const apple = require('../assets/apple.png');
const fruit = { lemon, banana, cherry, apple }

const QuestionFour = ({ slotResults, updateResult }) => {
    // SET REELS AND IMAGES
    const [reels, setReels] = useState([]);
    const [images, setImages] = useState([]);
    const [fruitImages, setFruitImages] = useState({});
    const [winningCoins, setWinningCoins] = useState(0);

    // SET REELS
    useEffect(() => {
        setReels([
            ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
            ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
            ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]
        ])

        // DEFAULT IMAGES
        setImages([fruit.lemon, fruit.apple, fruit.banana]);
        setFruitImages([fruit.lemon, fruit.banana, fruit.cherry, fruit.apple]);
    }, []);

    // SPIN FUNCTION 
    function spin () {
        document.getElementById('lost-coin').classList.remove("d-none");
        var result = [];
        let newImages = [...fruitImages];
        for(var i = 0; i < reels.length; i++){
            var fruit = reels[i][Math.floor(Math.random() * (reels[i].length))]
            result.push(fruit);

            // UPDATE IMAGES
            switch(fruit){
                case 'lemon':
                    newImages[i] = fruitImages[0];
                    break;
                case 'banana':
                    newImages[i] = fruitImages[1];
                    break;
                case 'cherry':
                    newImages[i] = fruitImages[2];
                    break;
                case 'apple':
                    newImages[i] = fruitImages[3];
                    break;
                default:
                    break;
            }
        }
        setImages(newImages);
        var adjacentFruits = findAdjacent(result);
        var winningPoints = 0;
        if(Object.keys(adjacentFruits).length > 0){
            for(let adjacentFruit in adjacentFruits){
                switch(adjacentFruit){
                    case 'cherry':
                        if(adjacentFruits[adjacentFruit] == 2){
                            winningPoints = 40;
                        } 
                        else if (adjacentFruits[adjacentFruit] == 3) {
                            winningPoints = 50;
                        }
                    break;
                    case 'banana':
                        if(adjacentFruits[adjacentFruit] == 2){
                            winningPoints = 5;
                        } 
                        else if (adjacentFruits[adjacentFruit] == 3) {
                            winningPoints = 15;
                        }
                    break;
                    case 'lemon':
                        if (adjacentFruits[adjacentFruit] == 3) {
                            winningPoints = 3;
                        }
                    break;
                    case 'apple':
                        if(adjacentFruits[adjacentFruit] == 2){
                            winningPoints = 10;
                        } 
                        else if (adjacentFruits[adjacentFruit] == 3) {
                            winningPoints = 20;
                        }
                    break;
                }
                updateResult(winningPoints-1);
                setWinningCoins(winningPoints);
            }
        } else {
            updateResult(-1);
            setWinningCoins(0);
        }
    } 
    
    function findAdjacent(result){
        const adjacentFruits = []
        for(var i = 0; i < result.length; i++){
            if(typeof(result[i + 1] !== 'undefined')){
                if(result[i] == result[i+1]){
                    if(typeof adjacentFruits[result[i]] == 'undefined') {
                        adjacentFruits[result[i]] = 1;
                    } 
                    adjacentFruits[result[i]] ++;
                }
            }
        }
        return adjacentFruits;
    }

    return (
        <>
            <div className="row">
                <div className="col col-12 col-md-12 col-lg-4 mb-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="font-weight-bold">Rewards</h5>
                        <hr/>
                        <ul>
                            <li>3 cherries in a row: won 50 coins</li>
                            <li>2 cherries in a row: won 40 coins</li>
                            <li>3 Apples in a row: won 20 coins</li>
                            <li>2 Apples in a row: won 10 coins</li>
                            <li>3 Bananas in a row: won 15 coins</li>
                            <li>2 Bananas in a row: won 5 coins</li>
                            <li>3 lemons in a row: won 3 coins</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="col col-12 col-md-12 col-lg-8 mb-2">
                    <div className="d-flex mb-2">
                        <div className="p-2">
                            <span>Number of coins: <strong>{slotResults}</strong></span>
                            <span id="lost-coin" className="badge badge-pill mx-2 badge-danger d-none">- 1 coin</span>
                            { winningCoins > 0 ? <span id="win-coin" className="badge badge-pill badge-success">+ {winningCoins} coins</span> : ''}
                        </div>
                        <div className="ml-auto p-2"><button type="button" className="btn btn-dark btn-sm" onClick={spin}>Spin</button></div>
                    </div>
                    <div className="slots row">
                        <div className="col col-4 col-md-4"><img className="slot-image" src={images[0]}/></div>
                        <div className="col col-4 col-md-4"><img className="slot-image" src={images[1]}/></div>
                        <div className="col col-4 col-md-4"><img className="slot-image" src={images[2]}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    slotResults: state.slotResults,
});

const mapDispatchToProps = dispatch => ({
    updateResult: number => dispatch(updateSlotResult(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFour)