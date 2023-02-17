import axios from "axios";

import getRandPublicImgUrl from "../ArticApi";
import { testExports } from "../ArticApi";

const {
  PUBLIC_IMGS_QUERY,
  IMAGE_ID_QUERY,
  SHOW_IMAGE_QUERY,
  getNumPublicImg,
  parseImgData,
} = testExports;

const MOCK_PUBLIC_IMGS = {
  data: {
    data: [
      {
        id: 2323,
      },
    ],
    pagination: {
      total: 4378,
    },
    config: {
      iiif_url: "https://www.artic.edu/iiif/2/",
    },
  },
};
const MOCK_IMAGE_ID = {
  data: {
    data: {
      image_id: "6721bad8-bcca-a070-2c9c-846f4ee45c37",
    },
  },
};

jest.mock("axios");

axios.get.mockImplementation((url) => {
  if (url.includes(PUBLIC_IMGS_QUERY)) {
    return Promise.resolve(MOCK_PUBLIC_IMGS);
  } else if (url.includes(IMAGE_ID_QUERY)) {
    return Promise.resolve(MOCK_IMAGE_ID);
  }
});

afterEach(() => {
  axios.get.mockClear();
});

describe("getNumPublicImg()", () => {
  it("should query the Artic API once and only once", async () => {
    await getNumPublicImg();
    expect(axios.get).toBeCalledTimes(1);
  });
  it("should read the correct image number returned", async () => {
    const numPublicImg = await getNumPublicImg();
    expect(numPublicImg).toEqual(MOCK_PUBLIC_IMGS.data.pagination.total);
  });
});

describe("parseImgData()", () => {
  it("should not query the Arctic API", () => {
    parseImgData(MOCK_PUBLIC_IMGS.data);
    expect(axios.get).toBeCalledTimes(0);
  });
  it("should return the correct iiif_url and image id ", () => {
    const parsedData = parseImgData(MOCK_PUBLIC_IMGS.data);

    expect(Object.keys(parsedData)).toContain("id");
    expect(parsedData.id).toEqual(MOCK_PUBLIC_IMGS.data.data[0].id);

    expect(Object.keys(parsedData)).toContain("iiif_url");
    expect(parsedData.iiif_url).toEqual(MOCK_PUBLIC_IMGS.data.config.iiif_url);
  });
});

describe("getRandPublicImgUrl()", () => {
  it("should query the Artic API thrice and only thrice", async () => {
    await getRandPublicImgUrl();
    expect(axios.get).toBeCalledTimes(3);
  });
  it("should return a correct random public image URL", async () => {
    const imgUrl = await getRandPublicImgUrl();
    expect(imgUrl).toEqual(
      MOCK_PUBLIC_IMGS.data.config.iiif_url +
        "/" +
        MOCK_IMAGE_ID.data.data.image_id +
        SHOW_IMAGE_QUERY
    );
  });
});
