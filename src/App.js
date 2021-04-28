import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import api from './services/pixabay-api';
import Loader from './components/Loading';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = () => {
      setIsLoading(prevLoading => !prevLoading);
      api
        .fetchImg(query, currentPage)
        .then(data => {
          if (data.length > 0 && currentPage) {
            setImages(prevImg => [...prevImg, ...data]);

            currentPage >= 2 &&
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
              });
          } else {
            setMsg('Enter the correct request');
          }
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    };

    fetchImages();
  }, [currentPage, query]);

  const updatePage = () => setCurrentPage(prevPage => prevPage + 1);

  const hendleChangeQuery = currentValue => {
    setQuery(currentValue);
    setImages([]);
    setCurrentPage(1);
    setMsg('');
  };

  const getlargeImageURL = link => {
    setLargeImageURL(link);
  };

  const toogleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={hendleChangeQuery} />
      <ImageGallery
        toogleModal={toogleModal}
        images={images}
        onClick={getlargeImageURL}
        errorMsg={msg}
      />

      {!isLoading && images.length >= 12 && <Button onClick={updatePage} />}
      {isLoading && <Loader />}

      {showModal && <Modal link={largeImageURL} toogleModal={toogleModal} />}
    </div>
  );
}
