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

type Review = {
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

type View = {
  count: number;
  id: string;
};

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([{}]);
  const [views, setViews] = useState<View>();
  const reviewsCollectionRef = collection(db, "reviews");
  const viewCollectionRef = collection(db, "views");

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReviews();
  }, [reviews]);

  useEffect(() => {
    const getViews = async () => {
      const views = await getDocs(viewCollectionRef);
      setViews({ count: views.docs[0].data().count + 1, id: views.docs[0].id });
    };
    getViews();
  },[]);

  useEffect(() => {
    const updateViews = async () => {
      if (views) {
        const viewDoc = doc(db, "views", views.id);
        const latestViews = { count: views.count };
        await updateDoc(viewDoc, latestViews);
      }
    };
    updateViews();
  }, [views]);

  const postReview = async (data: ReviewData) => {
    await addDoc(reviewsCollectionRef, data);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Technologies />
      <SectionDivider />
      <Testimonials reviews={reviews} postReview={postReview} />
    </div>
  );
};

export default Home;
