document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('loader')?.classList?.add('hidden')
    }

    if(!navigator.onLine) location.replace('/Offline') 

};