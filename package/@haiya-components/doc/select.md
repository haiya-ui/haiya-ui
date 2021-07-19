## Select

Separate data and style for clear code logic with less code.

```jsx
function demo() {
  const userInfoSelect = useSelect({
    options: ['user1', 'user2', 'user3'],
  })

  return (
    <div>
      <div>{userInfoSelect.value}</div>

      <select {...userInfoSelect.props}></select>

      <button onClick={() => userInfoSelect.reset()}>Reset</button>
      <button onClick={() => userInfoSelect.setDisabled(true)}>Disabled</button>
      <button onClick={() => userInfoSelect.setLoading(true)}>Loading</button>
    </div>
  )
}
```

```jsx
// new
function demo() {
  const userInfoSelect = useSelect({
    options: ['user1', 'user2', 'user3'],
  })

  return (
    <div>
      <div>{userInfoSelect.value}</div>

      <Select {...userInfoSelect.props} />

      <button onClick={() => userInfoSelect.reset()}>Reset</button>
      <button onClick={() => userInfoSelect.setDisabled(true)}>Disabled</button>
      <button onClick={() => userInfoSelect.setLoading(true)}>Loading</button>
    </div>
  )
}

// old
function demo2() {
  const [userSelectValue, setUserSelectValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState(['user1', 'user2', 'user3'])

  return (
    <div>
      <div>{userSelectValue}</div>

      <Select
        disabled={disabled}
        value={userSelectValue}
        options={options}
        onChange={(value) => setUserSelectValue(value)}
      />

      <button onClick={() => setUserSelectValue('')}>Reset</button>
      <button onClick={() => setDisabled(true)}>Disabled</button>
      <button onClick={() => setLoading(true)}>Loading</button>
    </div>
  )
}
```

```jsx
function demo() {
  const [userInfoSelectProps, userInfoSelectController] = useSelect({
    options: ['user1', 'user2', 'user3'],
  })

  return (
    <div>
      <div>{userInfoSelectController.value}</div>

      <Select {...userInfoSelectProps} />

      <button onClick={() => userInfoSelectController.reset()}>Reset</button>
      <button onClick={() => userInfoSelectController.setDisabled(true)}>
        Disabled
      </button>
      <button onClick={() => userInfoSelectController.setLoading(true)}>
        Loading
      </button>
    </div>
  )
}
```
