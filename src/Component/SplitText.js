import React, {Component} from "react";

class SplitText extends Component {
  render(){
    return(
      <span aria-label="VOAP" role="heading">
          {this.props.copy.split("").map(function(char, index){
            let style = {animationDelay: (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
    );
  }
}

export default SplitText