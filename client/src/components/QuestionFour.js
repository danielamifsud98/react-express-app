import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { updateSlotResult } from '../store/actions'

// SET IMAGES 
const lemon = require('../images/lemon.png');
const banana = require('../images/banana.png');
const cherry = require('../images/cherry.png');
const apple = require('../images/apple.png');
const fruit = { lemon, banana, cherry, apple }

const QuestionFour = ({ slotResults, updateResult }) => {
    // SET REELS AND IMAGES
    const [reels, setReels] = useState([]);
    const [images, setImages] = useState([]);
    const [fruitImages, setFruitImages] = useState({});

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
        console.log(adjacentFruits);
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
                <div className="col col-md-4">
                <div className="card">
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
                <div className="col col-md-8">
                    <div className="d-flex mb-2">
                        <div className="p-2"><span>Number of coins: <strong>{slotResults}</strong></span></div>
                        <div className="ml-auto p-2"><button onClick={spin}>Spin</button></div>
                    </div>
                    <div className="slots row">
                        <div className="col-md-4"><img className="slot-image"src={images[0]} /></div>
                        <div className="col-md-4"><img className="slot-image"src={images[1]} /></div>
                        <div className="col-md-4"><img className="slot-image"src={images[2]} /></div>
                    </div>
                </div>
            </div>
            {/* <button onClick={()=>{
                updateResult(2);
            }}>Test Counter</button> */}
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
// import React from 'react';

// const rootElement = document.getElementById('root')
  
// function RepeatButton(props) {
//   return (
//     <button 
//       aria-label='Play again.' 
//       id='repeatButton' 
//       onClick={props.onClick}>
//     </button>
//   );
// }

// function WinningSound() {
//   return (
//   <audio autoplay="autoplay" className="player" preload="false">
//     <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
//   </audio>  
//   );
// }

// className QuestionFour extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       winner: null
//     }
//     this.finishHandler = this.finishHandler.bind(this)
//     this.handleClick = this.handleClick.bind(this);
//   }  

//   handleClick() { 
//     this.setState({ winner: null });
//     this.emptyArray();
//     this._child1.forceUpdateHandler();
//     this._child2.forceUpdateHandler();
//     this._child3.forceUpdateHandler();
//   }

//   static loser = [
//     'Not quite', 
//     'Stop gambling', 
//     'Hey, you lost!', 
//     'Ouch! I felt that',      
//     'Don\'t beat yourself up',
//     'There goes the college fund',
//     'I have a cat. You have a loss',
//     'You\'re awesome at losing',
//     'Coding is hard',
//     'Don\'t hate the coder'
//   ];

//   static matches = [];

//   finishHandler(value) {
//     QuestionFour.matches.push(value);  

//     if (QuestionFour.matches.length === 3) {
//       const { winner } = this.state;
//       const first = QuestionFour.matches[0];
//       let results = QuestionFour.matches.every(match => match === first)
//       this.setState({ winner: results });
//     }
//   }

//   emptyArray() {
//     QuestionFour.matches = [];
//   }

//   render() {
//     const { winner } = this.state;
//     const getLoser = () => {       
//       return QuestionFour.loser[Math.floor(Math.random()*QuestionFour.loser.length)]
//     }
//     let repeatButton = null;
//     let winningSound = null;

//     if (winner !== null) {
//       repeatButton = <RepeatButton onClick={this.handleClick} />
//     }
    
//     if (winner) {
//       winningSound = <WinningSound />
//     }

//     return (
//       <div>
//         {winningSound}
//         <h1 style={{ color: 'white'}}>
//           <span>{winner === null ? 'Waiting…' : winner ? '🤑 Pure skill! 🤑' : getLoser()}</span>
//         </h1>

//         <div className={`spinner-container`}>
//           <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
//           <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
//           <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
//           <div className="gradient-fade"></div>
//         </div>
//         {repeatButton}          
//       </div>
//     );
//   }
// }  
  
// className Spinner extends React.Component {  
//   constructor(props){
//     super(props);
//     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//   };

//   forceUpdateHandler(){
//     this.reset();
//   }; 

//   reset() {
//     if (this.timer) { 
//       clearInterval(this.timer); 
//     }  

//     this.start = this.setStartPosition();

//     this.setState({
//       position: this.start,
//       timeRemaining: this.props.timer        
//     });

//     this.timer = setInterval(() => {
//       this.tick()
//     }, 100);      
//   }

//   state = {
//     position: 0,
//     lastPosition: null
//   }
//   static iconHeight = 188;
//   multiplier = Math.floor(Math.random()*(4-1)+1);

//   start = this.setStartPosition();
//   speed = Spinner.iconHeight * this.multiplier;    

//   setStartPosition() {
//     return ((Math.floor((Math.random()*9))) * Spinner.iconHeight)*-1;
//   }

//   moveBackground() {
//     this.setState({ 
//       position: this.state.position - this.speed,
//       timeRemaining: this.state.timeRemaining - 100
//     })
//   }

//   getSymbolFromPosition() {
//     let { position } = this.state;
//     const totalSymbols = 9;
//     const maxPosition = (Spinner.iconHeight * (totalSymbols-1)*-1);
//     let moved = (this.props.timer/100) * this.multiplier
//     let startPosition = this.start;
//     let currentPosition = startPosition;    

//     for (let i = 0; i < moved; i++) {              
//       currentPosition -= Spinner.iconHeight;

//       if (currentPosition < maxPosition) {
//         currentPosition = 0;
//       }      
//     }

//     this.props.onFinish(currentPosition);
//   }

//   tick() {      
//     if (this.state.timeRemaining <= 0) {
//       clearInterval(this.timer);        
//       this.getSymbolFromPosition();    

//     } else {
//       this.moveBackground();
//     }      
//   }

//   componentDidMount() {
//     clearInterval(this.timer);

//     this.setState({
//       position: this.start,
//       timeRemaining: this.props.timer
//     });

//     this.timer = setInterval(() => {
//       this.tick()
//     }, 100);
//   }

//   render() {
//     let { position, current } = this.state;   

//     return (    
//         <>        
//         <div 
//             style={{backgroundPosition: '0px ' + position + 'px'}}
//             className={`icons`}          
//         />
//       </>
//     )
//   }
// }

// export default QuestionFour;