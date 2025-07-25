# Documentation

This documentation is automatically maintained through GitHub Actions that use GPT to summarize code changes and update feature documentation.

## Structure

### `/changelog`
Contains the main changelog tracking all major additions, changes, and removals to the project.

- `CHANGELOG.md` - Main project changelog following Keep a Changelog format

### `/features`
Detailed documentation for each page/feature in the application. Each page has its own directory with comprehensive documentation.

Current pages:
- **Home** - Main landing page with welcome content
- **Profile** - User profile management and personal information
- **Settings** - Application settings and configuration options

## Automated Documentation

This documentation is maintained through:
1. **GitHub Actions** - Triggered on code changes
2. **GPT Integration** - Analyzes code changes and updates documentation
3. **Automatic Updates** - Keeps feature docs and changelog current

## Documentation Standards

Each feature documentation includes:
- Overview and purpose
- Technical implementation details
- File references
- Styling and design decisions
- Future enhancement plans

## Contributing

When adding new pages or features:
1. Create a new directory in `/docs/features/[page-name]`
2. Include a comprehensive `README.md` with page-specific documentation
3. Update the main changelog
4. The automated system will help maintain documentation accuracy

## Usage

This documentation serves as:
- Developer onboarding resource
- Feature reference guide
- Change tracking system
- Architecture documentation
