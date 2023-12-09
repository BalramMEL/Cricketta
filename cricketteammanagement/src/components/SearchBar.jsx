import React, { useState } from 'react'

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    };
    
  return (
    <div className='d-flex align-items-center gap-3' style={{justifyContent: 'center'}}>
      <div onClick={handleSearchClick} style={{ color: "#FFFBF5", cursor: 'pointer'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </div>
      <div style={{
        overflow: 'hidden',
        transition: 'max-width 0.8s ease-out',
        maxWidth: showSearch ? '15rem' : '0',     
        
      }}>
      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          style={{
              display: 'block',
           
            padding: '5px',
            borderRadius: '5px 5px',
            border: 'none',
          }}
        />
      )}

      </div>
    </div>
  )
}

export default SearchBar