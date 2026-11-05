# GitLime – Engineering Guidelines

You are working on GitLime, a real, live SaaS product built with React and Vite.

Follow professional software engineering standards similar to those used in an experienced product engineering team.

## 1. Code Quality

- Write clean, readable, maintainable, and production-conscious code.
- Keep implementations simple and avoid unnecessary complexity.
- Follow the existing project architecture and coding conventions.
- Use meaningful and consistent variable, function, and component names.
- Avoid duplicate code and unnecessary abstractions.
- Keep functions and components focused on a single responsibility.
- Write comments only when the logic genuinely needs clarification.

## 2. React Best Practices

- Use functional components and React Hooks.
- Create reusable components when there is a genuine need.
- Keep components small and focused.
- Separate UI components from business logic when appropriate.
- Avoid unnecessary state, effects, and re-renders.
- Use stable keys when rendering lists.
- Follow proper React rendering and data-flow patterns.

## 3. Project Architecture

- Keep the folder structure organized and predictable.
- Group related components, utilities, hooks, and assets logically.
- Avoid creating unnecessary files or folders.
- Do not introduce additional libraries unless there is a clear requirement.
- Reuse existing dependencies and utilities whenever possible.

## 4. Performance

- Avoid unnecessary dependencies and heavy libraries.
- Optimize assets and avoid unnecessarily large images.
- Avoid expensive computations and unnecessary rendering.
- Use lazy loading when it provides a meaningful performance benefit.
- Keep the production bundle as lightweight as reasonably possible.

## 5. UI & Styling

- Follow the existing GitLime design system.
- Maintain consistent colors, typography, spacing, and component styles.
- Prioritize responsive layouts and accessibility.
- Avoid unnecessary inline styles.
- Do not introduce new visual patterns without a design requirement.
- Preserve the existing design unless explicitly asked to change it.

## 6. Code Changes

- Before modifying anything, inspect the existing implementation.
- Understand the current structure and dependencies.
- Modify only the files necessary for the requested task.
- Do not rewrite working code without a valid reason.
- Do not create placeholder code, unused components, or speculative features.
- Never remove existing functionality unintentionally.

## 7. Error Handling & Validation

- Handle errors appropriately.
- Avoid empty catch blocks and silently ignored failures.
- Validate user inputs where necessary.
- Never expose API keys, credentials, or sensitive configuration.
- Keep secrets in environment variables.

## 8. Git & Documentation

- Keep the existing Git history intact.
- Do not run destructive Git commands.
- Do not modify `.gitignore` without a reason.
- Update documentation when functionality or setup instructions change.
- Use clear, meaningful commit messages when asked to create commits.

## 9. Working Approach

Before implementing a task:

1. Understand the requirement.
2. Inspect the relevant files.
3. Identify the simplest maintainable solution.
4. Explain the planned changes briefly.
5. Implement the changes.
6. Run relevant checks and fix introduced errors.
7. Summarize the files changed and what was implemented.

## Most Important Rule

Do not over-engineer.

Prefer simple, efficient, production-quality solutions over unnecessarily long, complicated, or heavily abstracted implementations.

Do not generate code just to make the project look sophisticated. Every component, function, dependency, and file should have a clear purpose.

Think and work like a professional frontend engineer contributing to an established production SaaS application.
