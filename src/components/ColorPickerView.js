import React from 'react';
import '../styles/ColorPickerView.css'
import ColorInput from './ColorInput';
import Rectangle from './Rectangle';

/**
 * Компонент React. ФОрма ввода цвета и область, покрашенная в этот цвет. 
 * Предоставляет API для подписки на обновление цвета в форме.
 */
class ColorPickerView extends React.Component {
    /**
     * Конструктор класса.
     * @param props объект для хранения свойств компонента.
     */
    constructor(props) {
        super(props);
        this.defaultColor = "#333333";
        this.defaultInputColor = "#FFFFFF";
        this.errorInputColor = "#FFDDDD";
        this.state = {
            color: this.defaultColor,
            colorInput: this.defaultInputColor,
        }
    }

    /**
     * Извлекает из переданной стркои с цветом в формате #rrggbb число rr в 16-чной системе счисления.
     * @param {Number} color строка с цветом в формате #rrggbb.
     */
    getRedChannel(color) {
        return parseInt(color[1] + color[2], 16);
    }

    /**
     * Извлекает из переданной стркои с цветом в формате #rrggbb число gg в 16-чной системе счисления.
     * @param {Number} color строка с цветом в формате #rrggbb.
     */
    getGreenChannel(color) {
        return parseInt(color[3] + color[4], 16);
    }

    /**
     * Извлекает из переданной стркои с цветом в формате #rrggbb число bb в 16-чной системе счисления.
     * @param {Number} color строка с цветом в формате #rrggbb.
     */
    getBlueChannel(color) {
        return parseInt(color[5] + color[6], 16);
    }

    /**
     * Нормализует строку с цветом. Под нормализацией понимаем приведение сокращенной формы вида "#abc" в полную вида "#aabbcc".
     * 
     * Если передана уже нормализованная строка, то ничего не делает.
     * 
     * Если передана некорректная строка, генерирует исключение.
     * 
     * @param {String} color a color string "#aabbcc" or "#abc".
     */
    normalize(color) {
        if (color[0] !== '#') {
            color = '#' + color;
        }

        if (color.length === 4) {
            return color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
        } else if (color.length === 7) {
            return color;
        } else {
            throw new Error("Color string is not valid");
        }
    }

    /**
     * Проверяет, является ли переданная строка цветом RGB в сокращенной или полной форме.
     * 
     * Возвращает `true` для строк вида "#xyz" и "#xxyyzz", где x, y, z - цифры 16-чной системы счисления.
     * 
     * @param {String} color строка, которую нужно проверить.
     */
    isValid(color) {
        let reg = new RegExp("^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$");
        return reg.test(color);
    }

    /**
     * Коллбэк, вызывающийся при любом именении текста в форме ввода цвета.
     */
    onInputChanged(rawColor) {
        if (this.isValid(rawColor)) {
            let color = this.normalize(rawColor);
            this.setState({ color: color, colorInput: this.defaultInputColor, });
            this.props.onNewColor(
                this.getRedChannel(color),
                this.getGreenChannel(color),
                this.getBlueChannel(color)
            );
        } else {
            this.setState({ colorInput: this.errorInputColor });
        }
    }

    /**
     * Отрисовывает компоннт при сене состояния.
     */
    render() {
        return (
            <div className="colorPickerView">
                <ColorInput onInputChanged={v => this.onInputChanged(v)} color={this.state.colorInput} />
                <Rectangle color={this.state.color} />
            </div>
        )
    }
}

export default ColorPickerView;