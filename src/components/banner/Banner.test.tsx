import React from 'react';
import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner', () => {
  const mockImageSrc = '/path/to/mock/image.jpg';

  it('renders the banner image', () => {
    render(<Banner image={mockImageSrc} />);
    const bannerImage = screen.getByTestId('banner-image');
    expect(bannerImage).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    const childContent = 'This is a child content';
    render(<Banner image={mockImageSrc}>{childContent}</Banner>);
    const childElement = screen.getByText(childContent);
    expect(childElement).toBeInTheDocument();
  });
});
