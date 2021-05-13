import React from 'react';
import Button from './Button';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <header className="header">
        <Button handleClick={this.props.handleClick} label={'Cars'} />
        <Button handleClick={this.props.handleClick} label={'Boats'} />
      </header>
    );
  }
}

export default Header;