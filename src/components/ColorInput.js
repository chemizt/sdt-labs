import React from 'react';
import '../styles/ColorInput.css'

/**
 * Компонент React. Форма ввода цвета.
 */
class ColorInput extends React.Component {

    /**
     * Отрисовывает компонент.
     */
    render() {
        return (
            <input
                id="input"
                type="text"
                maxLength="7"
                className="colorInput"
                style={{ backgroundColor: this.props.color }}
                onChange={(e) => this.props.onInputChanged(e.target.value)}
            />
        );
    }
}
export default ColorInput;