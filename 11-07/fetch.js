import axios from 'axios'

async function fetchdata() {
    axios
    .get(`https://reqres.in/api/users?page=1`)
    .then((result) => {
        result.json().data.map((res) => {
            console.log(res.email)
        })
        })
    .catch((error) => {
        console.log(error);
    });

    return ;
}

fetchdata();


//before node17 fetch wasnt available, lts (latest support) for node18 will start on october 
//Node. js 18 will be the 'Current' release for the next 6 months and then promoted to Long-term Support (LTS) in October 2022.

//i have node 16 (node -v)
//since fetch aint supported in it we have to install the node package externally 
//npm install node-fetch


//server brings data fetched from api in response object

import fetch from 'node-fetch'

const getData = async() => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=1')
        console.log(response)
    
        const parsed = await response.json()
        // parsed.data.forEach(element => {
        //     console.log(element.email)
        // });

        console.table(parsed.data, ['first name', 'last name', 'email'])

    } catch(e) {
        console.log('something went wrong')
    }
   
}

getData()