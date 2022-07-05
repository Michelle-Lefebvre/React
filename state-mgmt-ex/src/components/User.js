// import React, { Component } from 'react';
// import { useState } from 'react';

export class User {
  user = [
    {
      userId: 1,
      firstName: 'Jennie',
      lastName: 'McFly',
      userName: 'JenFly',
      gamesPlayed: 1,
    },
    {
      userId: 2,
      firstName: 'Monika',
      lastName: 'Jones',
      userName: 'Jonesy',
      gamesPlayed: 2,
    },
    {
      userId: 3,
      firstName: 'Mark',
      lastName: 'Mackle',
      userName: 'Markle',
      gamesPlayed: 3,
    },
  ];

  render() {
    return (
      <div>
        <ul>
          {this.users.map((user) => (
            <li>
              `${user.userName} played ${user.gamesPlayed} games.`
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
