import React from "react";
import "./BlogPostsCards.css";
import BlogPost from "../BlogPost/BlogPost";
import moab from "../../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import surf from "../../images/gian-luca-pilia-KxQYNqp329Y-unsplash.jpg";
import jungle from "../../images/jared-rice-IgE49g4qbCk-unsplash.jpg";
import tokyo from "../../images/ryoji-iwata-n31JPLu8_Pw-unsplash.jpg";
import sailing from "../../images/artem-verbo-zHg5TXgVoGQ-unsplash.jpg";

const BlogPostsCards = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <BlogPost
              src={jungle}
              text="Find your jungle paradise and kick your feet up..."
              label="Travel"
              path="/services"
            />
            <BlogPost
              src={surf}
              text="Travel through Bali In search for the best waves..."
              label="Surf"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <BlogPost
              src={moab}
              text="Explore the Arches and beautiful sand stone of Utah..."
              label="Adventure"
              path="/services"
            />

            <BlogPost
              src={tokyo}
              text="Getting lost in Tokyo, Japan..."
              label="Explore"
              path="/products"
            />
            <BlogPost
              src={sailing}
              text="Sailing through the open sea.."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsCards;
