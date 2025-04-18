 const searchBox = document.getElementById("SearchArea");
          searchBox.addEventListener('keydown', function(event) {
            console.log('Key pressed:', event.key);
            if (event.key === 'Enter') {
              console.log('Enter key was pressed');
              const text = `https://google.com/search?q=${encodeURIComponent(searchBox.value)}`
              console.log(text)
              window.location.href = text;
            };
          });
