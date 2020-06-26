import React, {Fragment} from 'react';

const SHOW_LESS_TEXT = 'Show Less';
const SHOW_MORE_TEXT = 'Read More';


export default class ReadMore extends React.Component{
    
  state = {
      showAll : false,
      stringToDisplay: [],
      paragraphToShow : this.props._lineParagraph,
  }

  toggleReadMore = () => {

    let { _html } = this.props;
    let length  =(_html.props.children.length);

    this.setState({
      showAll: !this.state.showAll,
    });

    let status =  this.state.showAll ? this.props._lineParagraph : length;
    this.ondefsRender(status);
    console.log(this.state.stringToDisplay);
    
  }

  _loop = (dups) =>{
    let list = [];
    Object.keys(dups).forEach(key =>  {
        list.push(dups[key].outerHTML);
    })
    return list;
  }

  onDisplay(){  
    let dups  = {...this.state.stringToDisplay}
    return React.createElement('div', {dangerouslySetInnerHTML: {__html: this._loop(dups) }});
  }

  currentAction(){
    return React.createElement('span', {dangerouslySetInnerHTML:{__html: !this.state.showAll ? SHOW_MORE_TEXT : SHOW_LESS_TEXT }}); 
  }

  ondefsRender(num){
      let dups  = {...this.state.stringToDisplay}
      const parent = document.createElement("p");
      let { _html } = this.props;

      _html.props.children.map((e, i)=>{
            if(i <= parseInt(num)){

              const parent = document.createElement("p");
              parent.innerHTML= (e.props.children);
              dups[i] =  parent;
          
             this.setState({
                  stringToDisplay : dups,
              })

             console.log(this.state.stringToDisplay);
          }
      })
  }

  componentDidMount(){
    this.ondefsRender(this.state.paragraphToShow);
  }

  render(){
    return(
      <Fragment>
        {this.onDisplay()}
        <div onClick={this.toggleReadMore}>{this.currentAction()}</div>
      </Fragment>
     )
  }
}