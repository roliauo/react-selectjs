import React from 'react';
import cssFile from './Selector.css';
import ClassNames from 'classnames/bind';

class Selector extends React.Component {
	constructor(props){
		super(props);
		this.state={
			open:false,
			selected: this.props.selected || '',
		}
		this.css = ClassNames.bind(cssFile);
	}

	renderOption(name, option, index){
		return(
  				<label className={this.css("option")} key={index}>
			        <input type="radio" name={name} value={option}	onClick={(e)=> {
			        															 this.selected(e);
			        															 this.props.onClick(e);
			        															} } />
			        <span className={(option===this.state.selected) ? this.css("title","active") : this.css("title") }
			        	  style={{padding: this.props.padding}}>
				        {option}
			        </span>
			    </label>
			)
	}

	toggleList(e){
		this.setState({open: !this.state.open,})
	}

	selected(e){
		this.setState({open: !this.state.open,
					selected: e.target.value,
		})
	}

	render() {
		const { disabled, title, name, optionList, padding, width , borderRadius, borderStyle, onClick} = this.props;
		//console.log(this.state.open+','+this.state.selected); //checked={this.state.open}
		const placeholder = this.state.selected || title ;
		return(
			<div className={this.css("custom-select")} style={{width: width, borderRadius: borderRadius, border: borderStyle}}>
			    <input type="radio" name={name}
			    		onClick={(e)=> disabled=='true' ? '' : this.toggleList(e) }
			    		checked={this.state.open} />
			    <span className={this.state.selected ? this.css("placeholder","black") : this.css("placeholder")}
			    	  style={{padding: padding ,background: disabled=='true' ? '#DBDBDB' : '#fff' }}>
			    {placeholder}
			    </span>

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

