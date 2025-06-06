# Security Bank coding exam

Regin Valeriano
reginpv@gmail.com
0917 777 3943

## Reference

Figma file:
https://www.figma.com/design/lmzYaaCb7mo2tZCCssl9B2/SBC-Tech-Exam?node-id=0-1

## Acceptance Criteria

**Display list of recipe:**
*   Only the list section should be scrollable.
*   The list should be sortable by title.
*   The list should be filterable by favorites.
*   The list should be searchable using a text field.
*   Users should be able to add a recipe to favorites by clicking the star icon on the image.

**Create new recipe:**
*   Validate fields; all fields are required:
    *   Name
    *   Email Address (must be a valid email format)
    *   Title
    *   Instructions
    *   Image
    *   Date added
*   Display the error field (highlighted in red) and error messages when validation fails.
*   The title should be unique among all recipes (display a Toast message for the error if not unique).
*   The image should be retrieved and saved/uploaded to the project folder using the title as the filename.

**Update Recipe (From another page):**
*   The title name field should be read-only.
*   Saving the updated recipe should prompt a toast message or a modal confirmation.

**Delete Recipe:**
*   Deleting a recipe should navigate the user back to the recipe list.

**Search:**
*   Display "No Record Found" when a search yields no results.

**Note:**
1.  Create your own JSON file for the initial recipe data.
2.  Handle CRUD (Create, Read, Update, Delete) operations via state management using Redux Toolkit.
3.  Images should be saved/uploaded locally to the `public/images` folder.
4.  The title name must be unique from other recipes.

**Please use the following technologies:**
*   TypeScript
*   Next.js 13.x (Pages Router)
*   Material-UI (MUI)
*   React Hook Form with Zod for validations
*   `createAsyncThunk` for asynchronous calls
