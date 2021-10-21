import { useEffect } from "react";
import { commerce } from "../lib/Commerce";

const GetClothes = () => {
  // Fetches all the clothes entry from commerce js database
  const fetchAllClothes = async () => {
    try {
      const { data } = await commerce.products.list({ limit: 190 });
      localStorage.setItem("allClothes", JSON.stringify(data));
      console.log("%cAll clothes are fetched.", "color: lime");
    } catch (error) {
      try {
        const { data } = await commerce.products.list({ limit: 190 });
        localStorage.setItem("allClothes", JSON.stringify(data));
        console.log("%cAll clothes are fetched.", "color: lime");
      } catch (error) {
        console.log("%cAttempts to get all clothes failed.", "color: crimson");
      }
    }
  };

  // Fetches men clothes entry from commerce js database
  const fetchMenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men"],
        limit: 100,
      });

      localStorage.setItem("menClothes", JSON.stringify(data));
      console.log("%cAll men clothes are fetched.", "color: lime");
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men"],
          limit: 100,
        });

        localStorage.setItem("menClothes", JSON.stringify(data));
        console.log("%cAll men clothes are fetched.", "color: lime");
      } catch (error) {
        console.log("%cAttempts to get men clothes failed.", "color: crimson");
      }
    }
  };

  // Fetches men jackets entry from commerce js database
  const fetchMenJackets = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "jackets"],
      });

      localStorage.setItem("menJackets", JSON.stringify(data));
      console.log("%cMen jackets are fetched.", "color: lime");
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men", "jackets"],
        });

        localStorage.setItem("menJackets", JSON.stringify(data));
        console.log("%cMen jackets are fetched.", "color: lime");
      } catch (error) {
        console.log("%cAttempts to get men jackets failed.", "color: crimson");
      }
    }
  };

  // Fetches men sleeves entry from commerce js database
  const fetchMenSleeves = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "longsleeves"],
      });

      localStorage.setItem("menSleeves", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men", "longsleeves"],
        });

        localStorage.setItem("menSleeves", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get men sleeves failed.", "color: crimson");
      }
    }
  };

  // Fetches men shirts entry from commerce js database
  const fetchMenShirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "shirts"],
      });

      localStorage.setItem("menShirts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men", "shirts"],
        });

        localStorage.setItem("menShirts", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get men shirts failed.", "color: crimson");
      }
    }
  };

  // Fetches men pants entry from commerce js database
  const fetchMenPants = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "pants"],
      });

      localStorage.setItem("menPants", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men", "pants"],
        });

        localStorage.setItem("menPants", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get men pants failed.", "color: crimson");
      }
    }
  };

  // Fetches men shorts entry from commerce js database
  const fetchMenShorts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "shorts"],
      });

      localStorage.setItem("menShorts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men", "shorts"],
        });

        localStorage.setItem("menShorts", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get men shorts failed.", "color: crimson");
      }
    }
  };

  // Fetches men headwear entry from commerce js database
  const fetchMenHeadwear = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "headwear"],
      });

      localStorage.setItem("menHeadwear", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["men", "headwear"],
        });

        localStorage.setItem("menHeadwear", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get men headwear failed.", "color: crimson");
      }
    }
  };

  // Fetches women clothes entry from commerce js database
  const fetchWomenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women"],
        limit: 100,
      });

      localStorage.setItem("womenClothes", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women"],
          limit: 100,
        });

        localStorage.setItem("womenClothes", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get women clothes failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches women jackets entry from commerce js database
  const fetchWomenJackets = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "jackets"],
      });

      localStorage.setItem("womenJackets", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "jackets"],
        });

        localStorage.setItem("womenJackets", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get women jackets failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches women shirts entry from commerce js database
  const fetchWomenShirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "shirts"],
      });

      localStorage.setItem("womenShirts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "shirts"],
        });

        localStorage.setItem("womenShirts", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get women shirts failed.", "color: crimson");
      }
    }
  };

  // Fetches women pants entry from commerce js database
  const fetchWomenPants = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "pants"],
      });

      localStorage.setItem("womenPants", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "pants"],
        });

        localStorage.setItem("womenPants", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get women pants failed.", "color: crimson");
      }
    }
  };

  // Fetches women shorts entry from commerce js database
  const fetchWomenShorts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "shorts"],
      });

      localStorage.setItem("womenShorts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "shorts"],
        });

        localStorage.setItem("womenShorts", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get women shorts failed.", "color: crimson");
      }
    }
  };

  // Fetches women dresses entry from commerce js database
  const fetchWomenDresses = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "dresses"],
      });

      localStorage.setItem("womenDresses", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "dresses"],
        });

        localStorage.setItem("womenDresses", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get women dresses failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches women sweatshirts entry from commerce js database
  const fetchWomenSweatshirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "sweatshirts"],
      });

      localStorage.setItem("womenSweatshirts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "sweatshirts"],
        });

        localStorage.setItem("womenSweatshirts", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get women sweatshirts failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches women tops entry from commerce js database
  const fetchWomenTops = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "tops"],
      });

      localStorage.setItem("womenTops", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "tops"],
        });

        localStorage.setItem("womenTops", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get women tops failed.", "color: crimson");
      }
    }
  };

  // Fetches women headwear entry from commerce js database
  const fetchWomenHeadwear = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "headwear"],
      });

      localStorage.setItem("womenHeadwear", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["women", "headwear"],
        });

        localStorage.setItem("womenHeadwear", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get women headwear failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches unisex clothes entry from commerce js database
  const fetchUnisexClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex"],
        limit: 100,
      });

      localStorage.setItem("unisexClothes", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["unisex"],
          limit: 100,
        });

        localStorage.setItem("unisexClothes", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get unisex clothes failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches unisex jackets entry from commerce js database
  const fetchUnisexJackets = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "jackets"],
      });

      localStorage.setItem("unisexJackets", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["unisex", "jackets"],
        });

        localStorage.setItem("unisexJackets", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get unisex jackets failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches unisex sweatshirts entry from commerce js database
  const fetchUnisexSweatshirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "sweatshirts"],
      });

      localStorage.setItem("unisexSweatshirts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["unisex", "sweatshirts"],
        });

        localStorage.setItem("unisexSweatshirts", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get unisex sweatshirts failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches unisex shirts entry from commerce js database
  const fetchUnisexShirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "shirts"],
      });

      localStorage.setItem("unisexShirts", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["unisex", "shirts"],
        });

        localStorage.setItem("unisexShirts", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get unisex shirts failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches unisex pants entry from commerce js database
  const fetchUnisexPants = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "pants"],
      });

      localStorage.setItem("unisexPants", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["unisex", "pants"],
        });

        localStorage.setItem("unisexPants", JSON.stringify(data));
      } catch (error) {
        console.log("%cAttempts to get unisex pants failed.", "color: crimson");
      }
    }
  };

  // Fetches unisex headwear entry from commerce js database
  const fetchUnisexHeadwear = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "headwear"],
      });

      localStorage.setItem("unisexHeadwear", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["unisex", "headwear"],
        });

        localStorage.setItem("unisexHeadwear", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get unisex headwear failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches winter clothes entry from commerce js database
  const fetchWinterClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter"],
        limit: 100,
      });

      localStorage.setItem("winterClothes", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["winter"],
          limit: 100,
        });

        localStorage.setItem("winterClothes", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get winter clothes failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches winter kids clothes entry from commerce js database
  const fetchWinterKidsClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter", "winterkid"],
      });

      localStorage.setItem("winterKidClothes", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["winter", "winterkid"],
        });

        localStorage.setItem("winterKidClothes", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get winter kids clothes failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches winter men clothes entry from commerce js database
  const fetchWinterMenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter", "wintermen"],
      });

      localStorage.setItem("winterMenClothes", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["winter", "wintermen"],
        });

        localStorage.setItem("winterMenClothes", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get winter men clothes failed.",
          "color: crimson"
        );
      }
    }
  };

  // Fetches winter women clothes entry from commerce js database
  const fetchWinterWomenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter", "winterwoman"],
      });

      localStorage.setItem("winterWomenClothes", JSON.stringify(data));
    } catch (error) {
      try {
        const { data } = await commerce.products.list({
          category_slug: ["winter", "winterwoman"],
        });

        localStorage.setItem("winterWomenClothes", JSON.stringify(data));
      } catch (error) {
        console.log(
          "%cAttempts to get winter women clothes failed.",
          "color: crimson"
        );
      }
    }
  };

  // Handles fetching and checking of clothes data from user's local storage
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("version")) === 1) {
      console.log("%cClothing up to date.", "color: lime");

      if (JSON.parse(localStorage.getItem("allClothes"))) {
        console.log("All clothes clear.");
      } else {
        console.log("%cGetting all the clothes...", "color: orange");
        fetchAllClothes();
      }

      if (JSON.parse(localStorage.getItem("winterClothes"))) {
        console.log("All winter clothes clear.");
      } else {
        console.log("%cGetting all winter clothes...", "color: orange");
        fetchWinterClothes();
      }

      if (JSON.parse(localStorage.getItem("winterKidClothes"))) {
        console.log("Winter kids clothes clear.");
      } else {
        console.log("%cGetting kids winter clothes...", "color: orange");
        fetchWinterKidsClothes();
      }

      if (JSON.parse(localStorage.getItem("winterMenClothes"))) {
        console.log("Winter men clothes clear.");
      } else {
        console.log("%cGetting men winter clothes...", "color: orange");
        fetchWinterMenClothes();
      }

      if (JSON.parse(localStorage.getItem("winterWomenClothes"))) {
        console.log("Winter women clothes clear.");
      } else {
        console.log("%cGetting women winter clothes...", "color: orange");
        fetchWinterWomenClothes();
      }

      if (JSON.parse(localStorage.getItem("menClothes"))) {
        console.log("All men clothes clear.");
      } else {
        console.log("%cGetting all men clothes...", "color: orange");
        fetchMenClothes();
      }

      if (JSON.parse(localStorage.getItem("menJackets"))) {
        console.log("Men jackets clear.");
      } else {
        console.log("%cGetting men jackets...", "color: orange");
        fetchMenJackets();
      }

      if (JSON.parse(localStorage.getItem("menSleeves"))) {
        console.log("Men sleeves clear.");
      } else {
        console.log("%cGetting men sleeves...", "color: orange");
        fetchMenSleeves();
      }

      if (JSON.parse(localStorage.getItem("menShirts"))) {
        console.log("Men shirts clear.");
      } else {
        console.log("%cGetting men shirts...", "color: orange");
        fetchMenShirts();
      }

      if (JSON.parse(localStorage.getItem("menPants"))) {
        console.log("Men pants clear.");
      } else {
        console.log("%cGetting men pants...", "color: orange");
        fetchMenPants();
      }

      if (JSON.parse(localStorage.getItem("menShorts"))) {
        console.log("Men shorts clear.");
      } else {
        console.log("%cGetting men shorts...", "color: orange");
        fetchMenShorts();
      }

      if (JSON.parse(localStorage.getItem("menHeadwear"))) {
        console.log("Men headwear clear.");
      } else {
        console.log("%cGetting men headwear...", "color: orange");
        fetchMenHeadwear();
      }

      if (JSON.parse(localStorage.getItem("womenClothes"))) {
        console.log("All women clothes clear.");
      } else {
        console.log("%cGetting all women clothes...", "color: orange");
        fetchWomenClothes();
      }

      if (JSON.parse(localStorage.getItem("womenJackets"))) {
        console.log("Women jackets clear.");
      } else {
        console.log("%cGetting women jackets...", "color: orange");
        fetchWomenJackets();
      }

      if (JSON.parse(localStorage.getItem("womenShirts"))) {
        console.log("Women shirts clear.");
      } else {
        console.log("%cGetting women shirts...", "color: orange");
        fetchWomenShirts();
      }

      if (JSON.parse(localStorage.getItem("womenTops"))) {
        console.log("Women tops clear.");
      } else {
        console.log("%cGetting women tops...", "color: orange");
        fetchWomenTops();
      }

      if (JSON.parse(localStorage.getItem("womenPants"))) {
        console.log("Women pants clear.");
      } else {
        console.log("%cGetting women pants...", "color: orange");
        fetchWomenPants();
      }

      if (JSON.parse(localStorage.getItem("womenShorts"))) {
        console.log("Women shorts clear.");
      } else {
        console.log("%cGetting women shorts...", "color: orange");
        fetchWomenShorts();
      }

      if (JSON.parse(localStorage.getItem("womenSweatshirts"))) {
        console.log("Women sweatshirts clear.");
      } else {
        console.log("%cGetting women sweatshirts...", "color: orange");
        fetchWomenSweatshirts();
      }

      if (JSON.parse(localStorage.getItem("womenDresses"))) {
        console.log("Women dresses clear.");
      } else {
        console.log("%cGetting women dresses...", "color: orange");
        fetchWomenDresses();
      }

      if (JSON.parse(localStorage.getItem("womenHeadwear"))) {
        console.log("Women headwear clear.");
      } else {
        console.log("%cGetting women headwear...", "color: orange");
        fetchWomenHeadwear();
      }

      if (JSON.parse(localStorage.getItem("unisexClothes"))) {
        console.log("All unisex clothes clear.");
      } else {
        console.log("%cGetting all unisex clothes...", "color: orange");
        fetchUnisexClothes();
      }

      if (JSON.parse(localStorage.getItem("unisexJackets"))) {
        console.log("Unisex jackets clear.");
      } else {
        console.log("%cGetting unisex jackets...", "color: orange");
        fetchUnisexJackets();
      }

      if (JSON.parse(localStorage.getItem("unisexShirts"))) {
        console.log("Unisex shirts clear.");
      } else {
        console.log("%cGetting unisex shirts...", "color: orange");
        fetchUnisexShirts();
      }

      if (JSON.parse(localStorage.getItem("unisexPants"))) {
        console.log("Unisex pants clear.");
      } else {
        console.log("%cGetting unisex pants...", "color: orange");
        fetchUnisexPants();
      }

      if (JSON.parse(localStorage.getItem("unisexSweatshirts"))) {
        console.log("Unisex sweatshirts clear.");
      } else {
        console.log("%cGetting unisex sweatshirts...", "color: orange");
        fetchUnisexSweatshirts();
      }

      if (JSON.parse(localStorage.getItem("unisexHeadwear"))) {
        console.log("Unisex headwear clear.");
      } else {
        console.log("%cGetting unisex headwear...", "color: orange");
        fetchUnisexHeadwear();
      }
    } else {
      console.log("%cGetting latest clothing updates...", "color: orange");

      localStorage.setItem("version", JSON.stringify(1));

      fetchAllClothes();

      fetchWinterClothes();
      fetchWinterKidsClothes();
      fetchWinterMenClothes();
      fetchWinterWomenClothes();

      fetchMenClothes();
      fetchMenJackets();
      fetchMenSleeves();
      fetchMenShirts();
      fetchMenPants();
      fetchMenShorts();
      fetchMenHeadwear();

      fetchWomenClothes();
      fetchWomenJackets();
      fetchWomenShirts();
      fetchWomenSweatshirts();
      fetchWomenDresses();
      fetchWomenPants();
      fetchWomenShorts();
      fetchWomenTops();
      fetchWomenHeadwear();

      fetchUnisexClothes();
      fetchUnisexJackets();
      fetchUnisexSweatshirts();
      fetchUnisexShirts();
      fetchUnisexPants();
      fetchUnisexHeadwear();
    }
  }, []);

  return <></>;
};

export default GetClothes;
