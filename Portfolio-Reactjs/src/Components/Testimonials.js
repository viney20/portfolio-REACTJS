import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <div className="text-container" style={{backgroundColor: "white",}}>
         <div className="row">

            <div className="two columns header-col">
               <h1><span></span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
    );
  }
}

export default Testimonials;
