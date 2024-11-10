import axios from "axios";

export const fetchFirst = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/first_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchSecond = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/second_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchThird = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/third_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchFourth = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/fourth_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchFifth = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/fifth_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchSixth = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/sixth_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchSeventh = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/seventh_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchEighth = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/eighth_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchNinth = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/ninth_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchTenth = async () => {
    try {
        var response = await axios.get("http://localhost:5046/Practice/tenth_query");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}