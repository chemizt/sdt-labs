import React from 'react';
import '../styles/Rectangle.css'
class Rectangle extends React.Component {
    render() {
        let color = this.props.color;
        return (
            <div className="rectangle" style={{ backgroundColor: color }} />
        );
    }
}
export default Rectangle;