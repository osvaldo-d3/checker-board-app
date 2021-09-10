function setStyles(el, styleObj){
    Object.keys(styleObj).map(key => el.setAttribute(key, styleObj[key]));
}
function CheckerBoard (props) {
    let rows = []
    for(let i = 0; i < props.size; i++){
        rows.push(React.createElement(Row, {rows: props.size, key: i, even:(i%2===0)}));
    }
    return React.createElement("div", null, rows)
}
function Row (props) {
    let cells = [];
    let alt = props.even ? 0 : 1;
    for(let i = alt; i < props.rows + alt; i++){
        let cellType = (i%2===0) ? styles["colorA"] : styles["colorB"];
        let cell = React.createElement(Cell, {cellStyle: cellType, key:i});
        cells.push(cell);
    };
    let row = React.createElement("div", {style: styles["row"]}, cells);
    return row;
}
function Cell (props) {
    let styleProto = Object.create(styles["cell"]);
    let obj = {
        "backgroundColor": props.cellStyle["backgroundColor"]
    };
    Object.assign(obj, styleProto.__proto__)
    return React.createElement("div", {style: obj}, "");
}

var styles = {
    row: {height: '50px'},
    cell: {height: '50px', width: '50px', display: 'inline-block'},
    colorA: {backgroundColor: 'black'},
    colorB: {backgroundColor: 'red'}
}

ReactDOM.render(React.createElement(CheckerBoard, {size:10}), document.getElementById("app"));