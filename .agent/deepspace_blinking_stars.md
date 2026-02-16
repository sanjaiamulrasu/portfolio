# Deep Space Blinking Stars Implementation

## Overview
This implementation adds a realistic twinkling/blinking effect to the deep space starfield background in the portfolio Hero section.

## Features Implemented

### 1. **Dynamic Star Selection**
- Randomly selects 10-20 stars per cycle
- Uses a Set to ensure no duplicate selections in the same cycle
- Automatically cycles to new stars after the current batch finishes

### 2. **Smooth Animation**
- **Easing Function**: Uses `easeInOutQuad` for smooth, natural-looking transitions
- **Size Animation**: Stars scale from base size to 1.5x-2x their original size
- **Opacity Animation**: Creates a blink cycle (fade in → fade out) using the same easing
- **Color Shift**: Stars shift 40% towards white when at peak brightness, creating a glow effect

### 3. **Animation Timing**
- Each star blinks for 1-3 seconds (randomized per star)
- Cycle duration is based on the shortest animation in the batch
- Next batch starts immediately when current animations complete

### 4. **Performance Optimization**
- Uses `useMemo` to generate star data once on mount
- Direct buffer attribute manipulation (no full scene re-render)
- Updates only the size and color attributes per frame
- Additive blending for realistic star glow
- Targeted at 60fps performance

## Technical Implementation

### Data Structure
```javascript
// Per-star animation data
{
    startTime: number,      // When this star started blinking
    duration: number,       // How long the blink lasts (1-3s)
    baseSize: number,       // Original star size
    targetSize: number      // Peak size (1.5x-2x base)
}
```

### Animation Cycle
1. **Selection Phase** (when time >= nextBlinkTime):
   - Pick 10-20 random star indices
   - Initialize animation data for each
   - Set next cycle time

2. **Animation Phase** (every frame):
   - Calculate progress (0 to 1) for each blinking star
   - Apply easing to create smooth blink cycle
   - Update size attribute based on eased progress
   - Update color attribute to shift towards white
   - Reset stars when animation completes

3. **Cleanup Phase**:
   - Remove finished animation data
   - Prepare for next cycle

### Buffer Attributes
```javascript
<bufferAttribute
    attach="attributes-position"  // Star positions (x, y, z)
    attach="attributes-color"     // Star colors (r, g, b) - ANIMATED
    attach="attributes-size"      // Star sizes - ANIMATED
/>
```

## Color Palette
- **Light Blue** (30%): RGB(0.5-1.0, 0.8-1.0, 1.0)
- **Medium Blue** (30%): RGB(0.3-0.6, 0.5-0.8, 0.9-1.0)
- **Indigo** (40%): RGB(0.4-0.75, 0.2-0.5, 0.7-1.0)
- **Glow**: Shifts 40% towards white (1.0, 1.0, 1.0) when blinking

## Files Modified
1. **DeepSpace.jsx** (new): Contains the blinking star logic
2. **Hero.jsx**: Imports and uses DeepSpace component
3. **index.css**: Updated color theme to blue/indigo gradients

## Usage
The component automatically starts animating when rendered. No props or configuration needed.

```jsx
<Canvas>
    <Suspense fallback={null}>
        <DeepSpace />
    </Suspense>
</Canvas>
```

## Performance Notes
- 5,000 stars total in the scene
- Only 10-20 stars animating at any given time
- Direct Float32Array manipulation for efficiency
- No React re-renders during animation
- Uses GPU-accelerated PointsMaterial
- Additive blending for realistic glow without performance hit
