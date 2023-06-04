import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import { SectionDivider } from "../Utility/GlobalStyles/GlobalComponents";
import Technologies from "../components/Technologies/Technologies";
import Testimonials from "../components/Testimonials/Testimonials";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { autoReviews } from "../static/constants";
import Statusbar from "../components/Statusbar/Statusbar";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";

export type Review = {
  id?: string;
  name?: string;
  orgName?: string;
  review?: string;
};

type ReviewData = {
  name?: string;
  orgName?: string;
  review?: string;
};

export type View = {
  count: number;
  id: string;
};

type ToggleTheme = {
  toggleTheme: () => void;
};

const Home = (props: ToggleTheme) => {
  const [reviews, setReviews] = useState<Review[]>([{}]);
  const [views, setViews] = useState<View>();
  const reviewsCollectionRef = collection(db, "reviews");
  const viewCollectionRef = collection(db, "views");

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(reviewsCollectionRef);
        setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.log(err);
        setReviews(autoReviews as Review[]);
      }
    };
    getReviews();
  }, []);

  useEffect(() => {
    const getViews = async () => {
      try {
        const views = await getDocs(viewCollectionRef);
        setViews({
          count: views.docs[0].data().count + 1 ?? 100,
          id: views.docs[0].id ?? 1,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getViews();
  }, []);

  useEffect(() => {
    const updateViews = async () => {
      if (views) {
        const viewDoc = doc(db, "views", views.id);
        const latestViews = { count: views.count };
        try {
          await updateDoc(viewDoc, latestViews);
        } catch (err) {
          console.log(err);
        }
      }
    };
    updateViews();
  }, [views]);

  const postReview = async (data: ReviewData) => {
    try {
      await addDoc(reviewsCollectionRef, data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <Statusbar views={views?.count} toggleTheme={props.toggleTheme} />
      <Header />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Technologies />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Testimonials reviews={reviews} postReview={postReview} />
      <SectionDivider />
      <Contacts />
      <SectionDivider />
    </div>
  );
};

export default Home;
