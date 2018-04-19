import React from 'react';
import cssFile from './Selector.css';
import ClassNames from 'classnames/bind';

class Selector extends React.Component {
	constructor(props){
		super(props);
		this.state={
			open:false,
			selected:'',
		}
		this.css = ClassNames.bind(cssFile);
	}

	renderOption(name, option, index){  
		return(
  				<label className={this.css("option")} key={index}>
			        <input type="radio" name={name} value={option}	onClick={(e)=> {
			        															 this.toggleList(e);
			        															 this.props.onClick(e);
			        															} } />
			        <span className={this.css("title")} style={{padding: this.props.padding}}>
				        {option}
			        </span>
			    </label>
			)
	}

	toggleList(e){ 
		this.setState({open: !this.state.open,
					selected: e.target.value,
		})
	}

	render() {
		const {title, name, optionList, padding, width , borderRadius, onClick} = this.props;
		//console.log(this.state.open+','+this.state.selected); //checked={this.state.open} 
		return(
			<div className={this.css("custom-select")} style={{width: width, 'borderRadius': borderRadius}}>
			    <input type="radio" name={name} onClick={(e)=> this.toggleList(e)} checked={this.state.open} />
			    <span className={this.css("placeholder")} style={{padding: padding}}>{title}</span>

			   {optionList.map((option,index)=>
			   			this.renderOption(name,option,index)	   	
			   			)}

			</div>

			)
	}

}

Selector.defaultProps={
	name:'options',
	optionList:['item1','item2','item3'],
	title:'Choose...',
}

export default Selector 
	
