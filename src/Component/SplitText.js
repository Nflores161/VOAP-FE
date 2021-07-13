import React, {Component} from "react";

class SplitText extends Component {
  render(){
    return(
      <span aria-label="VOAP" role="heading" style={{fontFamily: `Permanent Marker, cursive`}}>
          {this.props.copy.split("").map(function(char, index){
            let style = {animationDelay: (0.5 + index / 6) + "s", fontFamily: `Permanent Marker, cursive`}
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