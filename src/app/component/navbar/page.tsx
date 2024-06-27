// navbar.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Logout from '@/app/logout/page';
import { styled } from '@mui/material/styles';
import { ModeToggle } from '@/components/page';

const StyledNavbar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#2196f3',
  color: 'white',
});

const StyledNavLinks = styled('div')({
  display: 'flex',
  gap: '10px',
});

const StyledButton = styled(Button)({
  textTransform: 'none',
  fontSize: '1rem',
  color: 'black',
  backgroundColor: 'white',
});

const StyledSignInButton = styled(Button)({
  backgroundColor: '#2196f3',
  textTransform: 'none',
  color: 'white',
  fontSize: '1em',
});

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const formData = localStorage.getItem('formData');
    if (formData) {
      const parsedData = JSON.parse(formData);
      setUserEmail(parsedData.email); // Assuming formData contains an email field
    }
  }, []);

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <StyledNavbar>
      {userEmail ? (
        <div>Welcome, {userEmail}</div>
      ) : (
        <StyledNavLinks>
          <Link href="/login" passHref>
            <StyledSignInButton variant="contained">
              Sign in
            </StyledSignInButton>
          </Link>
          <Link href="/register" passHref>
            <StyledButton variant="contained">
              Sign up
            </StyledButton>
          </Link>
        </StyledNavLinks>
      )}
      <ModeToggle />
      <div>
        <Logout />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
