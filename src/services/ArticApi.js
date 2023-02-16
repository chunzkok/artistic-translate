import axios from "axios";

const API_LINK = "https://api.artic.edu/api/v1/artworks/";
const PUBLIC_IMGS_QUERY = "search?query[term][is_public_domain]=true";
const IMAGE_ID_QUERY = "?fields=image_id";
const SHOW_IMAGE_QUERY = "/full/843,/0/default.jpg";

export default async function getRandPublicImgUrl() {
    const idUpperBound = Math.floor(await getNumPublicImg() / 12);
    const randomIndex = Math.floor(Math.random() * idUpperBound) + 1;

    const imgData = await axios.get(
        API_LINK + PUBLIC_IMGS_QUERY + "&page=" + randomIndex +  "&limit=1"
    );
    const parsedData = parseImgData(imgData.data);

    const image_id = await axios.get(
        API_LINK + parsedData.id + IMAGE_ID_QUERY
    ).then(rawData => rawData.data.data.image_id);

    const url = parsedData.iiif_url + "/" + image_id + SHOW_IMAGE_QUERY;
    return url;
}

async function getNumPublicImg() {
    const response = await axios.get(API_LINK + PUBLIC_IMGS_QUERY + "&limit=0");
    return response.data.pagination.total;
}

function parseImgData(imgData) {
    const iiif_url = imgData.config.iiif_url;
    const id = imgData.data[0].id;
    return { iiif_url, id };
}
