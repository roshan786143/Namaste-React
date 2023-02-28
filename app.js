const actress1 = React.createElement('h1',{
    style : {color : 'green'}
},'Candy love');

const actress2 = React.createElement('h1',{
    style : {color : 'blue'}
},'Sunny leone');

const actress3 = React.createElement('h1',{
    style : {color : 'hotpink'}
},'Rakul Preet Singh');

const container = React.createElement('div',{},[actress1, actress2, actress3]);
// console.log(container);

const root1 = document.getElementById('root');

const root = ReactDOM.createRoot(root1,{});

root.render(container);