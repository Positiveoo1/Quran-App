document.addEventListener("DOMContentLoaded", () => {
    const surahs = [
      { number: 1, name: "Al-Fatihah" },
      { number: 2, name: "Al-Baqarah" },
      { number: 3, name: "Aal-E-Imran" },
      { number: 4, name: "An-Nisa" },
      { number: 5, name: "Al-Ma'idah" },
      { number: 6, name: "Al-An'am" },
      { number: 7, name: "Al-A'raf" },
      { number: 8, name: "Al-Anfal" },
      { number: 9, name: "At-Tawbah" },
      { number: 10, name: "Yunus" },
      { number: 11, name: "Hud" },
      { number: 12, name: "Yusuf" },
      { number: 13, name: "Ar-Ra'd" },
      { number: 14, name: "Ibrahim" },
      { number: 15, name: "Al-Hijr" },
      { number: 16, name: "An-Nahl" },
      { number: 17, name: "Al-Isra" },
      { number: 18, name: "Al-Kahf" },
      { number: 19, name: "Maryam" },
      { number: 20, name: "Ta-Ha" },
      { number: 21, name: "Al-Anbiya" },
      { number: 22, name: "Al-Hajj" },
      { number: 23, name: "Al-Mu'minun" },
      { number: 24, name: "An-Nur" },
      { number: 25, name: "Al-Furqan" },
      { number: 26, name: "Ash-Shu'ara" },
      { number: 27, name: "An-Naml" },
      { number: 28, name: "Al-Qasas" },
      { number: 29, name: "Al-Ankabut" },
      { number: 30, name: "Ar-Rum" },
      { number: 31, name: "Luqman" },
      { number: 32, name: "As-Sajda" },
      { number: 33, name: "Al-Ahzab" },
      { number: 34, name: "Saba" },
      { number: 35, name: "Fatir" },
      { number: 36, name: "Ya-Sin" },
      { number: 37, name: "As-Saffat" },
      { number: 38, name: "Sad" },
      { number: 39, name: "Az-Zumar" },
      { number: 40, name: "Ghafir" },
      { number: 41, name: "Fussilat" },
      { number: 42, name: "Ash-Shura" },
      { number: 43, name: "Az-Zukhruf" },
      { number: 44, name: "Ad-Dukhan" },
      { number: 45, name: "Al-Jathiya" },
      { number: 46, name: "Al-Ahqaf" },
      { number: 47, name: "Muhammad" },
      { number: 48, name: "Al-Fath" },
      { number: 49, name: "Al-Hujurat" },
      { number: 50, name: "Qaf" },
      { number: 51, name: "Adh-Dhariyat" },
      { number: 52, name: "At-Tur" },
      { number: 53, name: "An-Najm" },
      { number: 54, name: "Al-Qamar" },
      { number: 55, name: "Ar-Rahman" },
      { number: 56, name: "Al-Waqia" },
      { number: 57, name: "Al-Hadid" },
      { number: 58, name: "Al-Mujadila" },
      { number: 59, name: "Al-Hashr" },
      { number: 60, name: "Al-Mumtahina" },
      { number: 61, name: "As-Saff" },
      { number: 62, name: "Al-Jumua" },
      { number: 63, name: "Al-Munafiqun" },
      { number: 64, name: "At-Taghabun" },
      { number: 65, name: "At-Talaq" },
      { number: 66, name: "At-Tahrim" },
      { number: 67, name: "Al-Mulk" },
      { number: 68, name: "Al-Qalam" },
      { number: 69, name: "Al-Haaqqa" },
      { number: 70, name: "Al-Maarij" },
      { number: 71, name: "Nuh" },
      { number: 72, name: "Al-Jinn" },
      { number: 73, name: "Al-Muzzammil" },
      { number: 74, name: "Al-Muddathir" },
      { number: 75, name: "Al-Qiyama" },
      { number: 76, name: "Al-Insan" },
      { number: 77, name: "Al-Mursalat" },
      { number: 78, name: "An-Naba" },
      { number: 79, name: "An-Nazi'at" },
      { number: 80, name: "Abasa" },
      { number: 81, name: "At-Takwir" },
      { number: 82, name: "Al-Infitar" },
      { number: 83, name: "Al-Mutaffifin" },
      { number: 84, name: "Al-Inshiqaq" },
      { number: 85, name: "Al-Buruj" },
      { number: 86, name: "At-Tariq" },
      { number: 87, name: "Al-A'la" },
      { number: 88, name: "Al-Ghashiya" },
      { number: 89, name: "Al-Fajr" },
      { number: 90, name: "Al-Balad" },
      { number: 91, name: "Ash-Shams" },
      { number: 92, name: "Al-Lail" },
      { number: 93, name: "Ad-Duha" },
      { number: 94, name: "Ash-Sharh" },
      { number: 95, name: "At-Tin" },
      { number: 96, name: "Al-Alaq" },
      { number: 97, name: "Al-Qadr" },
      { number: 98, name: "Al-Bayyina" },
      { number: 99, name: "Az-Zalzala" },
      { number: 100, name: "Al-Adiyat" },
      { number: 101, name: "Al-Qaria" },
      { number: 102, name: "At-Takathur" },
      { number: 103, name: "Al-Asr" },
      { number: 104, name: "Al-Humaza" },
      { number: 105, name: "Al-Fil" },
      { number: 106, name: "Quraish" },
      { number: 107, name: "Al-Ma'un" },
      { number: 108, name: "Al-Kawthar" },
      { number: 109, name: "Al-Kafiroon" },
      { number: 110, name: "An-Nasr" },
      { number: 111, name: "Al-Masad" },
      { number: 112, name: "Al-Ikhlas" },
      { number: 113, name: "Al-Falaq" },
      { number: 114, name: "An-Nas" },
    ];
  
    const surahList = document.getElementById("surah-list");  
    const quranContent = document.getElementById("quran-content");
    const searchInput = document.getElementById("search-input");
    const sidebar = document.getElementById("sidebar");

    const openSidebarBtn = document.querySelector(".fa-bars");
    
    let isSidebarOpen = false;
    
    openSidebarBtn.addEventListener("click", toggleSidebar);
    
    document.addEventListener("click", handleClickOutside);
    
    function toggleSidebar() {
      isSidebarOpen = !isSidebarOpen;
    
      sidebar.style.width = isSidebarOpen ? "250px" : "0px";
      quranContent.style.filter = isSidebarOpen ? 'blur(2px)' : 'none';
      this.classList.remove('sidebar')
    }





function handleClickOutside(event) {
  if (isSidebarOpen && !sidebar.contains(event.target) && event.target !== openSidebarBtn) {
    toggleSidebar();
  }
}

  

    surahs.forEach((surah) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = surah.name;
      a.dataset.surah = surah.number;
      a.addEventListener("click", (event) => {
        event.preventDefault();
        loadSurah(surah.number);
        sidebar.style.width = "0";  
      });
      li.appendChild(a);
      surahList.appendChild(li);
    });
  
    function displaySurahs(filteredSurahs) {
        surahList.innerHTML = ""; 
        filteredSurahs.forEach((surah) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = surah.name;
          a.dataset.surah = surah.number;
          a.addEventListener("click", (event) => {
            event.preventDefault();
            loadSurah(surah.number);
            sidebar.style.width = "0";  
          });
          li.appendChild(a);
          surahList.appendChild(li);
        });
      }
    
      displaySurahs(surahs);
    
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredSurahs = surahs.filter((surah) =>
          surah.name.toLowerCase().includes(query)
        );
        displaySurahs(filteredSurahs);
      });

    function loadSurah(surahNumber) {
      fetchSurah(surahNumber);
    }
    let currentSurahIndex = 0;
    const totalSurahs = surahs.length;
  
    const previousButton = document.getElementById("previous");
    previousButton.addEventListener("click", () => {
      if (currentSurahIndex > 0) {
        currentSurahIndex--;
        fetchSurah(surahs[currentSurahIndex].number);
      } else {
        alert("You are already on the first surah.");
      }
    });
  
    const nextButton = document.getElementById("next");
    nextButton.addEventListener("click", () => {
      if (currentSurahIndex < totalSurahs) {
        currentSurahIndex++;
        fetchSurah(surahs[currentSurahIndex].number);
      } else {
        alert("You are already on the last surah.");
      }
    });
    window.onload = () => {
      const storedIndex = localStorage.getItem("currentSurahIndex");
      if (storedIndex !== null && !isNaN(storedIndex)) {
        currentSurahIndex = parseInt(storedIndex);
      }
      fetchSurah(surahs[currentSurahIndex].number);
    };
  
    async function fetchSurah(surahNumber) {
      document.getElementById("loader").style.display = "block";
      try {
        const response = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahNumber}`
        );
        const data = await response.json();
        displaySurah(data.data);
        fetchSurahAudio(surahNumber);
      } catch (error) {
        console.error("Error fetching Surah:", error);
        quranContent.textContent =
          "An error occurred while fetching the Surah content.";
      } finally {
        document.getElementById("loader").style.display = "none";
      }
    }
    const increase = document.getElementById("increase-font-btn");
    const decrease = document.getElementById("decrease-font-btn");
  
    function displaySurah(surah) {
        quranContent.innerHTML = `<mark>${surah.englishName} (${surah.englishNameTranslation})</mark>`;
        let ayahCounter = 1;
        surah.ayahs.forEach((ayah, index) => {
          let ayahText = ayah.text;
          if (surah.number >= 2 && surah.number <= 114) {
            ayahText = removeBasmalah(ayahText);
          }
          if (ayahText.includes("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")) {
            const parts = ayahText.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ");
            const bismillah = `<span style="color: red;">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</span>`;
            const bismillahParagraph = document.createElement("p");
            bismillahParagraph.innerHTML = bismillah;
            bismillahParagraph.style.textAlign = "center";
            bismillahParagraph.style.fontSize = "22px";
            bismillahParagraph.classList.add("under");
            quranContent.appendChild(bismillahParagraph);
            ayahText = parts.length > 1 ? parts[1] : "";
          }
        
          function convertToArabicNumber(number) {
    const arabicNumerals = "٠١٢٣٤٥٦٧٨٩";
    return String(number)
      .split("")
      .map((digit) => arabicNumerals[digit])
      .join("");
  }
    
          if (ayahText.trim() !== "") {
            const p = document.createElement("p");
            const sentences = ayahText.split(".");
            ayahText = sentences.map((sentence, index) => {
              return index < sentences.length - 1 ? sentence + "۝" : sentence;
          }).join("");
            const arabicNumber = convertToArabicNumber(ayahCounter);
            if (ayahText.endsWith("۝")) {
              ayahText = ayahText.slice(0, -1) +`۝<span style="font-weight: bold;"> ${arabicNumber} </span>`;
            } else {
              ayahText += `<span style="font-weight: bold;"> ${arabicNumber} </span>`;
            }
            ayahCounter++;
            p.innerHTML = ayahText;
            p.style.textAlign = "center";
            p.style.fontSize = "25px";
            p.classList.add("under");
    
            quranContent.appendChild(p);
            const increase = document.getElementById("increase-font-btn");
            const decrease = document.getElementById("decrease-font-btn");
            increase.addEventListener("click", () => {
              p.style.fontSize = `${parseInt(p.style.fontSize) + 2}px`;
            });
            decrease.addEventListener("click", () => {
              p.style.fontSize = `${parseInt(p.style.fontSize) - 2}px`;
            });
          }
          
        });

      

      }
  
      const round = document.getElementById("round11");
      
     
      if (round) {
        round.addEventListener("click", (event) => {
          event.stopPropagation();
    
          document.body.classList.toggle("dark");
    
          if (document.body.classList.contains("dark")) {
            round.style.transform = "translateX(20px)";
            round.style.transition = "transform 0.5s ease-in-out";
            round.style.backgroundColor = "#777";
          } else {
            round.style.transform = "translateX(0px)";
            round.style.backgroundColor = "white";
          }
        });
      } else {
        console.error('Element with class "round" not found');
      }
      
    
  function removeBasmalah(ayahText) {
    if (ayahText.includes("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")) {
      const parts = ayahText.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ");
      return parts.length > 1 ? parts[1] : "";
    }
    return ayahText;
  }
  


    let audioPlayer = new Audio();
    let ayahs = [];
    let currentIndex = 0;
    let isPlaying = false;
  
    document.getElementById("stop").addEventListener("click", stopAudio);
    document.getElementById("play").addEventListener("click", togglePlay);
    async function fetchSurahAudio(surahNumber) {
      try {
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`
        );
        const data = await res.json();
        ayahs = data.data.ayahs;
        currentIndex = 0;
      } catch (error) {
        console.error("Error fetching Surah Audio:", error);
      }
    }
  
    function playAudio() {
      if (!isPlaying) {
        playAyah(currentIndex);
        isPlaying = true;
        updatePlayIcon()
      } else if (audioPlayer.paused) {
        audioPlayer.play();
        updatePlayIcon()
      }
    }
  
    function pauseAudio() {
      if (isPlaying && !audioPlayer.paused) {
        audioPlayer.pause();
        updatePlayIcon();
      }
    }
    function togglePlay() {
        const playButton = document.getElementById("play");
      
        if (isPlaying) {
          playButton.innerHTML = '<i class="fas fa-play"></i>'; 
          pauseAudio();
        } else {
          playButton.innerHTML = '<i class="fas fa-pause"></i>'; 
          playAyah(currentIndex);
        }
        isPlaying = !isPlaying;
      }
      
    function playAyah(index) {
      if (index < ayahs.length) {
        audioPlayer.src = ayahs[index].audio;
        audioPlayer.play();
        audioPlayer.onended = () => {
          currentIndex++;
          playAyah(currentIndex);
        };
        const ayahElements = quranContent.getElementsByTagName("p");
  
        for (let i = 0; i < ayahElements.length; i++) {
          ayahElements[i].classList.remove("highlighted");
        }
        ayahElements[index].classList.add("highlighted");
  
        currentIndex = index;
      } else {
        isPlaying = false;
        currentIndex = 0;
      }
    }
  
    function stopAudio() {
      if (isPlaying) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        isPlaying = false;
        updatePlayIcon();
  
        const ayahElements = quranContent.getElementsByTagName("p");
        for (let i = 0; i < ayahElements.length; i++) {
          ayahElements[i].classList.remove("highlighted");
        }
      }
    }
    

   function updatePlayIcon() {
  const playButton = document.getElementById("play");
  playButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}
    
  });
  
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scroll1");

    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {  
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  