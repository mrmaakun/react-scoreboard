'use strict';


function ScoreBoardHeader(props) {
  return <div>
    <h1>ScoreBoard!</h1>
  </div>
}

function ScoreLabel(props){
  return <div> <p>{props.topPlayer}: {props.topScore}</p>
  <p>{props.bottomPlayer}: {props.bottomScore}</p>
  </div>
}

function ScoringButton(props){
  return <button onClick={props.onClick}>{props.player}</button>
}

class ScoreBoard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      score: [0,0]
    };
  }
  render(){
    return (
      <div>
        <ScoreBoardHeader />
        <ScoreLabel topPlayer="Player 1" topScore={this.state.score[0]} bottomPlayer="Player 2" bottomScore={this.state.score[1]} />
        <ScoringButton player="Player1" onClick={()=>this.handleClick(0)}/>
        <ScoringButton player="Player2" onClick={()=>this.handleClick(1)}/>
      </div>
    )
  }
  handleClick(i){
    let currentScore = this.state.score;
    currentScore[i]++
    this.setState({score: currentScore})
  }
}

const element = <ScoreBoard/>


const domContainer = document.querySelector('#mycontainer');
ReactDOM.render(element, domContainer);