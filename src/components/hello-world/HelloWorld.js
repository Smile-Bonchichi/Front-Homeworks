function HelloWorld() {
    const helloWorld = () => {
        alert('Hello world!');
    };
    
    return (
        <>
            <button onClick={ helloWorld }>Hello world</button>
        </>
    );
}

export default HelloWorld;
