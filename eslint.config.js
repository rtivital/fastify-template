import eslint from '@eslint/js';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  pluginSecurity.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['**/*.js', '**/*.cjs', '**/*.mjs'] }
);
