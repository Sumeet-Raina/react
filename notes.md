=> `"parcel": "^2.11.0"` //carat here means if tomorrow there is a minor upgrade parcel will automatically, ~will upgrade the major versions automatically

# Parcel

- Dev build
- Local server
- HMR => Hot Module Replacement
- Parcel uses a file watching algorithm wrtten in c++
- Parcel is also caching things up in .parcel-cache this makes builds faster.
- Image optimization
- Bundles our files
- Compress files , it will remove all white spaces from ur files.
- consistent hashing
- Code splitting
- Differential bundling (When you app is hosted it makes sure your app works on older browsers)
- Diagnostics
- Error Handling
- Https
- Tree shaking - remove unused code
- Different dev and prod bundles.

# package.json

package.json is a manifest file for Node.js projects, specifying the project's metadata, dependencies, scripts, and more. It outlines the packages your project depends on so you can install them using npm or yarn. On the other hand, package-lock.json is automatically generated and tracks the exact version of each installed package and its dependencies, ensuring consistency across installations. While package.json can specify ranges for versions, package-lock.json locks them down to specific versions to prevent discrepancies in future installations.
