# Project: Focus Timer App

## Project Description

Build a **Focus Timer Application** that helps users stay focused while studying or working.

The application should allow users to start a countdown timer, pause it, reset it, and receive a completion message when their focus session finishes.

## Project Requirements

### 1. Countdown Timer

- Display a countdown timer starting at **25 minutes (25:00)**.
- The timer should decrease by one second every second while running.
- Display the remaining time in `MM:SS` format.
- Automatically stop the timer when it reaches `00:00`.

### 2. Timer Controls

Create three buttons:

- **Start:** Starts the countdown timer.
- **Pause:** Pauses the timer without resetting the remaining time.
- **Reset:** Stops the timer and resets it to `25:00`.

### 3. Session Completion

- Display a completion message when the timer reaches `00:00`.
- Make sure the timer does not continue below zero.

### 4. Browser Tab Title

- Update the browser tab title to display the remaining time.
- For example: `24:35 - Focus Timer`.
- The title should update as the countdown progresses.

### 5. Effect Cleanup

- Use `useEffect` to manage the countdown interval.
- Properly clean up the interval using `clearInterval()`.
- Stop the interval when the timer is paused, completed, or the component unmounts.
