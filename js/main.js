if('serviceWorker' in navigator)
{
    console.log('Inside the flow');
    window.addEventListener('load',()=>{
navigator.serviceWorker.register('/sw.js')
.then(reg=>console.log('Service workder register'))
.catch(reg=>console.log(`Service Workder failed To register ${reg}`));
    });
}