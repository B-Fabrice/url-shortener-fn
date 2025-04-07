import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      semi: ['error', 'never'],
      'no-console': 'warn',
      'quotes': ['error','single'],
      'jsx-quotes': ['error','prefer-single'],
      'indent': ['error', 2],
      '@typescript-eslint/no-explicit-any': 'off',
      'comma-dangle': [
        'error',
        'never'
      ],
      'no-unused-vars': ['error', 
        {
          'vars': 'all',
          'args': 'after-used',
          'caughtErrors': 'all',
          'ignoreRestSiblings': false,
          'reportUsedIgnorePattern': false
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'warn',
      'react/jsx-no-duplicate-props': [
        'error',
        {
          ignoreCase: true
        }
      ],
      'react/jsx-no-target-blank': [
        'error',
        {
          allowReferrer: true,
          enforceDynamicLinks: 'always'
        }
      ]
    }
  }
]

export default eslintConfig
