import app from './app'

function main(){
    let port = 3000;
    app.listen(port, 'localhost', () => {
        console.log(`Server listening on port ${port}`);
    });
}

main();