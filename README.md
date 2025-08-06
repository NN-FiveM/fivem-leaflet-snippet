<a id="readme-top"></a>

[![React][React.js]][React-url]
[![TypeScript][TypeScript-shield]][TypeScript-url]
[![Leaflet][Leaflet-shield]][Leaflet-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <h3 align="center">🗺️ FiveM Interactive Map Component</h3>

  <p align="center">
    A customizable, interactive map component built specifically for FiveM using React, Leaflet, and React-Leaflet.
    <br />
    This component renders game map tiles with zoom controls and can be easily integrated into any React application.
    <br />
    <br />
    <!-- <a href="#quick-start"><strong>Explore the docs »</strong></a>
    <br />
    <br /> -->
    <a href="https://interactive-demo.nn-development.dk">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>📑 Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#quick-start">Quick Start</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#component-api">Component API</a></li>
    <li><a href="#customization">Customization</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 📌 About The Project

This is a reusable React component that provides an interactive map specifically designed for FiveM servers. The component uses Leaflet for map rendering with a custom coordinate system optimized for game maps.

**Key Features:**

- 🗺️ **Interactive Map**: Pan, zoom, and explore with smooth animations
- 🎮 **FiveM Optimized**: Custom coordinate system designed for FiveM game maps
- ⚡ **Performance**: Canvas rendering with tile buffering for smooth interactions
- 🎨 **Customizable**: Configurable zoom levels, tile URLs, and styling
- 📱 **Responsive**: Works on desktop and mobile devices
- 🔧 **TypeScript**: Full TypeScript support with proper type definitions

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✨ Features

<div align="center">

| Feature                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| 🗺️ **Interactive Map** | Pan, zoom, and explore with smooth animations                |
| 🎮 **FiveM Optimized** | Custom coordinate system designed for FiveM game maps        |
| ⚡ **Performance**     | Canvas rendering with tile buffering for smooth interactions |
| 🎨 **Customizable**    | Configurable zoom levels, tile URLs, and styling             |
| 📱 **Responsive**      | Works on desktop and mobile devices                          |
| 🔧 **TypeScript**      | Full TypeScript support with proper type definitions         |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠️ Built With

[![React][React.js]][React-url]
[![TypeScript][TypeScript-shield]][TypeScript-url]
[![Leaflet][Leaflet-shield]][Leaflet-url]
[![Styled Components][StyledComponents-shield]][StyledComponents-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- QUICK START -->

## 🚀 Quick Start

### Using the Component

```tsx
import { InteractiveMap } from "./components/InteractiveMap/InteractiveMap";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <InteractiveMap assetUrl="/assets/maps/atlas" minZoom={0} maxZoom={5} />
    </div>
  );
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->

## 📦 Installation

### 1. Install Dependencies

First, install the required dependencies in your React project:

```bash
npm install react-leaflet leaflet styled-components
npm install --save-dev @types/leaflet
```

### 2. Copy Component Files

Copy the following files and folders to your project:

```
src/components/InteractiveMap/
├── InteractiveMap.tsx          # Main component
├── InteractiveMap.css          # Leaflet CSS imports and base styles
├── Helpers/
│   └── TileLayerWrapper.tsx    # Custom tile layer with bounds
└── Types/
    └── CustomCRS.ts            # FiveM coordinate system
```

### 3. Map Assets Structure

Ensure your map tiles are organized in the following structure in your `public` folder:

```
public/assets/maps/atlas/
├── 0/
│   └── 0/
│       └── 0.jpg
├── 1/
│   ├── 0/
│   │   ├── 0.jpg
│   │   └── 1.jpg
│   └── 1/
│       ├── 0.jpg
│       └── 1.jpg
└── ... (additional zoom levels)
```

> **Note:** The structure follows the pattern: `{z}/{x}/{y}.jpg` where:
>
> - `z` = zoom level
> - `x` = tile x coordinate
> - `y` = tile y coordinate

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## 🚀 Usage

### Basic Usage

```tsx
<InteractiveMap />
```

### With Custom Configuration

```tsx
<InteractiveMap assetUrl="/custom/map/path" minZoom={1} maxZoom={7} />
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- COMPONENT API -->

## 📋 Component API

### Props

| Prop       | Type     | Default                | Description                  |
| ---------- | -------- | ---------------------- | ---------------------------- |
| `assetUrl` | `string` | `"/assets/maps/atlas"` | Base URL for map tile assets |
| `minZoom`  | `number` | `0`                    | Minimum zoom level           |
| `maxZoom`  | `number` | `5`                    | Maximum zoom level           |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CUSTOMIZATION -->

## 🎨 Customization

### Styling

The component uses styled-components for styling. You can customize the appearance by:

**1. Modifying the Wrapper component in `InteractiveMap.tsx`:**

```tsx
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.7s;
  background-color: #0fa7d0; // Change background color
`;
```

**2. Updating CSS in `InteractiveMap.css` for global map styles**

### Coordinate System

The component uses a custom CRS (Coordinate Reference System) optimized for FiveM maps. You can adjust the transformation parameters in `CustomCRS.ts`:

```typescript
const center_x = 117.3; // X offset
const center_y = 172.8; // Y offset
const scale_x = 0.02072; // X scale factor
const scale_y = 0.0205; // Y scale factor
```

### Adding Markers

To add markers or other interactive elements, extend the component:

```tsx
import { Marker, Popup } from "react-leaflet";

// Inside the MapContainer in InteractiveMap.tsx
<Marker position={[0, 0]}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>;
```

> **💡 Tip:** Take a look at [simple-livemap/PlayerMarker/index.tsx](https://github.com/charming-byte/simple-livemap/blob/main/src/web/src/components/PlayerMarker/index.tsx) for a complete marker implementation example.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEVELOPMENT -->

## 🛠️ Development

### Run the Demo

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Dependencies

- **react**: ^19.1.1
- **react-leaflet**: ^5.0.0-rc.2
- **leaflet**: (peer dependency)
- **styled-components**: ^6.1.19
- **@types/leaflet**: ^1.9.20 (dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 🙏 Acknowledgments

- [charming-byte](https://github.com/charming-byte) - Original author of [simple-livemap](https://github.com/charming-byte/simple-livemap)
- [Leaflet](https://leafletjs.com/) - The leading open-source JavaScript library for mobile-friendly interactive maps
- [React-Leaflet](https://react-leaflet.js.org/) - React components for Leaflet maps
- [ChatGPT](https://chatgpt.com) - For writing this ReadMe.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript-shield]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Leaflet-shield]: https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white
[Leaflet-url]: https://leafletjs.com/
[StyledComponents-shield]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[StyledComponents-url]: https://styled-components.com/
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
[license-url]: https://opensource.org/licenses/MIT
