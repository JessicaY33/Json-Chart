async function getData() //this does not work :(
{
    try
    {
        const source = await fetch('ZonAann.Ts+dSST.csv');
        let data = await source.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

console.log("hello");

getData();