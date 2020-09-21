(() => {

    const API_KEY = '5ea534306b3da7ba59dfbb527b11b02d';
    const CODE = '9u10v6d';
    const ip = {code: null};


    ip.code = (async () => {
        await fetch('https://api.ipify.org?format=json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                return ip.code = `${data.ip}`;
            })
            .catch(err => console.log(err));
    })();

    const getDevice = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            return 1;
        }
        if (/Win|Linux|Mac|X11/i.test(navigator.userAgent)) {
            return 2;
        }
        return 0;
    }

    const getName = () => {
        return document.querySelector('#name').value;
    }

    const getPhone = () => {
        let phoneVal = document.querySelector('#phone').value;
        phoneVal = phoneVal.replace(/\s/g, '');
        phoneVal = phoneVal.replace('-', '');
        return phoneVal;
    }

    const getSubid = () => {
        let arr = [];
        let arr2 = [];


        let getParams = window.location.search.substring(1);

        if (getParams === '') {
            return {utm_source: '', utm_medium: '', utm_campaign: ''}
        }
        ;

        getParams.match(/(utm)\w+=\w+/g).forEach(item => {
            arr.push(item)
        })

        arr.forEach((item) => {
            return arr2.push(item.split('='));
        })

        return Object.fromEntries((new Map(arr2)));
    }


    const makeOrder = () => {

        // fetch(`https://api.monsterleads.pro/method/order.add?api_key=${API_KEY}&tel=${getPhone()}&code=${CODE}&traffic_type=${getDevice()}&ip=${ip.code}&client=${getName()}&format=json&utm_source=${getSubid().utm_source}&utm_medium=${getSubid().utm_medium}&utm_campaign=${getSubid().utm_campaign}`)
        //     .then(response => {return response.json()})
        //     .then( data => {
        //         if(data.status === 'error'){
        //             window.location.replace("https://bbbbbooot.000webhostapp.com/html/error.html");
        //         }else{
        //             alert('Good')
        //             window.location.replace("https://bbbbbooot.000webhostapp.com/html/sendleads.html");
        //         }
        //     } )

        // let request = new XMLHttpRequest();
        // console.log(request);
        // function reqReadyStateChange() {
        //     if (request.readyState === 4) {
        //         let status = request.status;
        //         if (status === 200) {
        //             window.location.replace("https://bbbbbooot.000webhostapp.com/html/sendleads.html");
        //         } else {
        //             window.location.replace("https://bbbbbooot.000webhostapp.com/html/error.html");
        //         }
        //     }
        // }
        // // строка с параметрами для отправки
        // let body = `api_key=${API_KEY}&tel=${getPhone()}&code=${CODE}&traffic_type=${getDevice()}&ip=${ip.code}&client=${getName()}&format=json&utm_source=${getSubid().utm_source}&utm_medium=${getSubid().utm_medium}&utm_campaign=${getSubid().utm_campaign}`;
        // request.open("POST", "https://api.monsterleads.pro/method/order.add?"+ body);
        // console.log(body);
        // request.onreadystatechange = reqReadyStateChange;
        // request.send();


    }

    // function loadDoc() {
    //       let xhttp = new XMLHttpRequest();
    //       xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 || this.status == 200) {
    //             alert(this.readyState);
    //             alert(this.status);
    //           window.location.replace("https://bbbbbooot.000webhostapp.com/html/sendleads.html");
    //         }else{
    //             window.location.replace("https://bbbbbooot.000webhostapp.com/html/error.html");
    //         }
    //       };

    //       let body = `api_key=${API_KEY}&tel=${getPhone()}&code=${CODE}&traffic_type=${getDevice()}&ip=${ip.code}&client=${getName()}&format=json&utm_source=${getSubid().utm_source}&utm_medium=${getSubid().utm_medium}&utm_campaign=${getSubid().utm_campaign}`;

    //       xhttp.open("POST", "https://api.monsterleads.pro/method/order.add?"+body, true);
    //       xhttp.send();
    //     }


    // $('#sub-btn').submit(function(event){
    //     event.preventDefault();

    //         $.ajax({
    //             method: "POST",
    //             url: "https://api.monsterleads.pro/method/order.add?",
    //             data: { api_key: API_KEY, tel: getPhone(), code: CODE, traffic_type: getDevice(), ip: ip.code, client: getName(), format: 'json', utm_source: getSubid().utm_source, utm_medium: getSubid().utm_medium, utm_campaign: getSubid().utm_campaign }
    //             })
    //           .done(function( msg ) {
    //               window.location.href = "https://bbbbbooot.000webhostapp.com/html/sendleads.html";
    //           });


    // });


    document.querySelector('#sub-btn').addEventListener('click', () => {
        document.querySelector('#order_form').action = `https://api.monsterleads.pro/method/order.add?api_key=${API_KEY}&tel=${getPhone()}&code=${CODE}&traffic_type=${getDevice()}&ip=${ip.code}&client=${getName()}&format=json&utm_source=${getSubid().utm_source}&utm_medium=${getSubid().utm_medium}&utm_campaign=${getSubid().utm_campaign}`;
    })


})();
