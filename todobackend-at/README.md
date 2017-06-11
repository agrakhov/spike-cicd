# Todobackend-at
Acceptance test project

### Env setup
Eslint:  
- `npm install --global eslint eslint-config-airbnb eslint-config-airbnb-base`
- `npm install --global eslint-plugin-jsx-a11y@^2.0.0 eslint-plugin-react eslint-plugin-import babel-eslint`
- (for eslint chai support): `npm install --global eslint-plugin-chai-friendly`

Babel:
- installed dev packages according to its docs, added .babelrc  

Test coverage report (nyc):
- `npm install --save-dev nyc babel-plugin-istanbul`
- modified .babelrc env-test-plugins-istanbul  
